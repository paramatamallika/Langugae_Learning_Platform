import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [streak, setStreak] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/");
    } else {
      setUser(storedUser);
      loadStreak();
    }
  }, [navigate]);

  // 🔥 Load streak (temporary local version)
  const loadStreak = () => {
    const savedStreak = localStorage.getItem("streak");
    if (savedStreak) {
      setStreak(savedStreak);
    } else {
      setStreak(1);
      localStorage.setItem("streak", 1);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const goToCourses = () => {
    navigate("/courses");
  };

  const goToFlashcards = () => {
    navigate("/flashcards");
  };

  if (!user) return null;

  // Profile Images
  const girlBitmoji =
    "https://i.pinimg.com/1200x/d6/a3/da/d6a3daa37cf0eaaff7f095c618383c78.jpg";

  const boyBitmoji =
    "https://i.pinimg.com/736x/4c/61/e0/4c61e09c400dbab4baf1dc8182224453.jpg";

  const profileImage =
    user.gender === "male" ? boyBitmoji : girlBitmoji;

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">

        {/* PROFILE SECTION */}
        <div className="profile-section">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
          <h1>Welcome, {user.name} 👋</h1>
          <p>Ready to continue your learning journey?</p>
        </div>

        {/* MAIN FEATURES */}
        <div className="dashboard-stats">

          {/* COURSES */}
          <div className="stat-box clickable" onClick={goToCourses}>
            <h3>📚 Courses</h3>
            <p>Start learning languages</p>
          </div>

          {/* FLASHCARDS */}
          <div className="stat-box clickable" onClick={goToFlashcards}>
            <h3>🧠 Flashcards</h3>
            <p>Practice quick questions</p>
          </div>

          {/* STREAK */}
          <div className="stat-box">
            <h3>🔥 Streak</h3>
            <p>{streak} Days</p>
          </div>

        </div>

        {/* LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Dashboard;