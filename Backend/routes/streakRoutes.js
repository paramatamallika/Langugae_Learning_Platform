import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

// GET USER STREAK
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const { data, error } = await supabase
      .from("streaks")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE STREAK (called after quiz)
router.post("/update", async (req, res) => {
  const { userId } = req.body;

  const today = new Date().toISOString().split("T")[0];

  try {
    const { data } = await supabase
      .from("streaks")
      .select("*")
      .eq("user_id", userId)
      .single();

    // First time user
    if (!data) {
      await supabase.from("streaks").insert([
        {
          user_id: userId,
          current_streak: 1,
          last_login: today,
        },
      ]);

      return res.json({ message: "Streak created" });
    }

    // Update streak only once per day
    if (data.last_login !== today) {
      const newStreak = data.current_streak + 1;

      await supabase
        .from("streaks")
        .update({
          current_streak: newStreak,
          last_login: today,
        })
        .eq("user_id", userId);
    }

    res.json({ message: "Streak updated" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;