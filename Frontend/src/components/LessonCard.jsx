import { useNavigate } from "react-router-dom";

function LessonCard({ lesson }) {
  const navigate = useNavigate();

  if (!lesson) return null;

  const handleQuiz = () => {
    navigate(`/quiz/${lesson.id}`);
  };

  return (
    <div className="lesson-card">
      <h2 className="lesson-title">{lesson.title}</h2>

      <p className="lesson-content">
        {lesson.content || "Lesson content not available"}
      </p>

      <div className="lesson-buttons">
        {lesson.video_url && (
          <a
            href={lesson.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="video-btn"
          >
            ▶ Watch Video
          </a>
        )}

      <button
  className="quiz-btn"
  onClick={() => navigate(`/quiz/${lesson.id}`)}
>
  Take Quiz
</button>
      </div>
    </div>
  );
}

export default LessonCard;