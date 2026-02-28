import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Language Learning Platform</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;