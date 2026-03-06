import express from "express";
import cors from "cors";

import courseRoutes from "./routes/courses.js";
import lessonRoutes from "./routes/lessons.js";
import quizRoutes from "./routes/quiz.js";
import authRoutes from "./routes/auth.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/courses", courseRoutes);
app.use("/lessons", lessonRoutes);
app.use("/quiz", quizRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/flashcards",flashcardRoutes); 

app.listen(5000, () => {
  console.log("Server running port 5000");
});