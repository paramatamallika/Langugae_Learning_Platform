import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

// GET lessons by course UUID
router.get("/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;

    const { data, error } = await supabase
      .from("lessons")
      .select("*")
      .eq("course_id", courseId); // UUID (string)

    if (error) {
      console.error(error);
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE video URL
router.put("/video/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { video_url } = req.body;

    const { data, error } = await supabase
      .from("lessons")
      .update({ video_url })
      .eq("id", id)
      .select();

    if (error) throw error;

    res.json({
      success: true,
      message: "Video updated",
      data
    });

  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

export default router;