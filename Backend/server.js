import express from "express";
import cors from "cors";

import courseRoutes from "./routes/courses.js";
import lessonRoutes from "./routes/lessons.js";
import quizRoutes from "./routes/quiz.js";
import authRoutes from "./routes/auth.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";
import streakRoutes from "./routes/streakRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/courses", courseRoutes);
app.use("/lessons", lessonRoutes);
app.use("/quiz", quizRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/flashcards", flashcardRoutes);
app.use("/api/streaks", streakRoutes); // ✅ corrected

app.listen(5000, () => {
  console.log("Server running on port 5000");
});