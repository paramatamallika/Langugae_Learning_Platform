import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

export default function Quiz() {
  const { lessonId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    API.get(`/quiz/${lessonId}`).then(res =>
      setQuestions(res.data)
    );
  }, [lessonId]);

  const checkAnswer = (q, answer) => {
    if (answer === q.correct_answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <h2>Quiz</h2>
      <h3>Score: {score}</h3>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          {[q.option1, q.option2, q.option3, q.option4].map((opt, i) => (
            <button key={i} onClick={() => checkAnswer(q, opt)}>
              {opt}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}