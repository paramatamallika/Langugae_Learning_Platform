import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password || !formData.gender) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify(formData));

  alert("Registration Successful!");

  navigate("/", { state: { showLogin: true } }); // ✅ correct
};

  return (
    <div className="auth-overlay">
      <div className="auth-box">
        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Gender Selection */}
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}