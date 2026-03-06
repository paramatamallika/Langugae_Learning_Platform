import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();


// GET QUIZ BY LESSON
router.get("/:lessonId", async (req, res) => {
  const { lessonId } = req.params;

  const { data, error } = await supabase
    .from("quiz")
    .select("*")
    .eq("lesson_id", lessonId);

  if (error) return res.status(500).json(error);

  res.json(data);
});


// ADD QUIZ QUESTION
router.post("/", async (req, res) => {
  const { lesson_id, question, options, answer } = req.body;

  const { data, error } = await supabase
    .from("quiz")
    .insert([{ lesson_id, question, options, answer }])
    .select();

  if (error) return res.status(500).json(error);

  res.json(data);
});


// SUBMIT QUIZ (CALCULATE SCORE + UPDATE STREAK)
router.post("/submit", async (req, res) => {
  const { userId, answers } = req.body;

  try {

    // get all quiz questions
    const { data: questions } = await supabase
      .from("quiz")
      .select("*");

    let score = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        score++;
      }
    });

    const percentage = Math.round((score / questions.length) * 100);

    // UPDATE STREAK
    const today = new Date().toISOString().split("T")[0];

    const { data: streak } = await supabase
      .from("streaks")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (!streak) {

      await supabase.from("streaks").insert([
        {
          user_id: userId,
          current_streak: 1,
          last_login: today
        }
      ]);

    } else {

      if (streak.last_login !== today) {

        await supabase
          .from("streaks")
          .update({
            current_streak: streak.current_streak + 1,
            last_login: today
          })
          .eq("user_id", userId);

      }

    }

    res.json({
      score,
      percentage,
      message: "Quiz submitted & streak updated"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

export default router;