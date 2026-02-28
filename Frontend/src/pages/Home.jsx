import { useNavigate } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div>
        <h1>Welcome to the Language Learning Platform</h1>
        <p>Learn Languages Easily!</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/courses")}
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
}

export default Home;   // ✅ THIS MUST BE HERE