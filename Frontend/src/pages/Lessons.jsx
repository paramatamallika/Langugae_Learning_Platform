import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

function Lessons() {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://your-backend-url.onrender.com/lessons/${courseId}`)
      .then((res) => setLessons(res.data))
      .catch((err) => console.log(err));
  }, [courseId]);

  return (
    <div className="container">
      <h2 style={{ marginBottom: "30px" }}>Lessons</h2>

      <div className="cards">
        {lessons.map((lesson) => (
          <div className="card" key={lesson.id}>
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
              alt="lesson"
            />
            <h3>{lesson.title}</h3>
            <p>{lesson.description || "Improve your language skills."}</p>

            <button
              className="btn btn-primary"
              onClick={() => navigate(`/quiz/${lesson.id}`)}
            >
              Take Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lessons;