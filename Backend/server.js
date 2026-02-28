import express from "express";
import cors from "cors";

import courseRoutes from "./routes/courses.js";
import lessonRoutes from "./routes/lessons.js";
import quizRoutes from "./routes/quiz.js";

const app = express();

app.use(cors());
app.use(express.json());   // 🔥 VERY IMPORTANT

app.use("/courses", courseRoutes);
app.use("/lessons", lessonRoutes);
app.use("/quiz", quizRoutes);

app.listen(5000, () => {
  console.log("Server running");
});