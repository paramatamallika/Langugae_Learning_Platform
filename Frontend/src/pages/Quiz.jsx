import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

function Quiz() {
  const { lessonId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    axios
      .get(`https://your-backend-url.onrender.com/quiz/${lessonId}`)
      .then((res) => setQuiz(res.data))
      .catch((err) => console.log(err));
  }, [lessonId]);

  if (!quiz) return <div className="container">Loading...</div>;

  const handleAnswer = (option) => {
    if (!answered) {
      if (option === quiz.answer) {
        setScore(score + 1);
      }
      setAnswered(true);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "700px", margin: "auto" }}>
      <div className="card" style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "15px" }}>Quiz</h2>
        <p style={{ marginBottom: "10px", fontWeight: "500" }}>
          Score: {score}
        </p>

        <h3 style={{ marginBottom: "20px" }}>{quiz.question}</h3>

        {quiz.options.map((option, index) => (
          <button
            key={index}
            className="btn btn-primary"
            style={{ display: "block", width: "100%", margin: "10px 0" }}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;