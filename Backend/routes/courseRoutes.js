import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

// GET all courses
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) return res.status(500).json(error);
  res.json(data);
});

// 🔥 ADD THIS
router.post("/", async (req, res) => {
  const { title, description } = req.body;

  const { data, error } = await supabase
    .from("courses")
    .insert([{ title, description }])
    .select();

  if (error) return res.status(500).json(error);

  res.json(data);
});

export default router;