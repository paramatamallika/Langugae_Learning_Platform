import express from "express";
import supabase from "../supabaseClient.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({
    message: "User registered successfully",
    user: data,
  });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({
    message: "Login successful",
    session: data.session,
  });
});

export default router;