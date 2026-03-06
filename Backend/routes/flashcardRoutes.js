import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

// RANDOM FLASHCARDS
router.get("/random", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("flashcards")
      .select("*");

    if (error) throw error;

    // shuffle
    const shuffled = data.sort(() => 0.5 - Math.random());

    res.json(shuffled.slice(0, 5));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;