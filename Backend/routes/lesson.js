import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

// GET lessons by course
router.get("/:courseId", async (req, res) => {
  const { courseId } = req.params;

  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", courseId);

  if (error) return res.status(500).json(error);

  res.json(data);
});

// 🔥 ADD THIS
router.post("/", async (req, res) => {
  const { course_id, title, description } = req.body;

  const { data, error } = await supabase
    .from("lessons")
    .insert([{ course_id, title, description }])
    .select();

  if (error) return res.status(500).json(error);

  res.json(data);
});

export default router;