const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  title: String,
  description: String
});

module.exports = mongoose.model("Lesson", lessonSchema);