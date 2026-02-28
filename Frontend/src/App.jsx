import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lessons/:courseId" element={<Lessons />} />
        <Route path="/quiz/:lessonId" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;