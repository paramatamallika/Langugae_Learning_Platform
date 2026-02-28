import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="courses">
      <h2 style={{ marginBottom: "30px" }}>Courses</h2>

      <div className="cards">
        {courses.map(course => (
          <div className="card" key={course.id}>
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="course"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/lessons/${course.id}`)}
            >
              View Lessons
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;