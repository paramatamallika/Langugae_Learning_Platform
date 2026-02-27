import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Language Learning Platform</h1>
      <p>Learn languages easily with interactive lessons and quizzes.</p>
      <button onClick={() => navigate("/courses")}>
        Explore Courses
      </button>
    </div>
  );
}