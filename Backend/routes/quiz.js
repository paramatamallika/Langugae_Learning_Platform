import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

// GET quiz by lesson
router.get("/:lessonId", async (req, res) => {
  const { lessonId } = req.params;

  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("lesson_id", lessonId);

  if (error) return res.status(500).json(error);

  res.json(data);
});

// 🔥 ADD THIS
router.post("/", async (req, res) => {
  const { lesson_id, question, options, answer } = req.body;

  const { data, error } = await supabase
    .from("quizzes")
    .insert([{ lesson_id, question, options, answer }])
    .select();

  if (error) return res.status(500).json(error);

  res.json(data);
});

export default router;