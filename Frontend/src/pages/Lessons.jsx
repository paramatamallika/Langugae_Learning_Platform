import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function Lessons() {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/lessons/${courseId}`).then(res =>
      setLessons(res.data)
    );
  }, [courseId]);

  return (
    <div>
      <h2>Lessons</h2>
      {lessons.map(lesson => (
        <div key={lesson.id}>
          <h3>{lesson.title}</h3>
          <p>{lesson.content}</p>
          <button onClick={() => navigate(`/quiz/${lesson.id}`)}>
            Take Quiz
          </button>
        </div>
      ))}
    </div>
  );
}