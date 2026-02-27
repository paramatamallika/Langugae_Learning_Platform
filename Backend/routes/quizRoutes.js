import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.get("/:lessonId", async (req, res) => {
  const { lessonId } = req.params;

  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("lesson_id", lessonId);

  if (error) return res.status(500).json(error);

  res.json(data);
});

export default router;