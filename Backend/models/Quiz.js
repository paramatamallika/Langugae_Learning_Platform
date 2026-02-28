const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true
  },
  question: String,
  options: [String],
  answer: String
});

module.exports = mongoose.model("Quiz", quizSchema);