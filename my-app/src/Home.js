import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const isNameValid = name.trim().length >= 3;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;
  const isConfirmPasswordValid = confirmPassword === password && confirmPassword.length > 0;

  const isFormValid = isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      console.log("Register Data:", { name, email, password });
      setSuccessMessage("🎉 Registered Successfully!");
   
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Create Candidate Account</h2>

        <form className="register-form" onSubmit={handleSubmit}>
     
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
            {!isNameValid && name && (
              <p style={{ color: "red" }}>Name must be at least 3 letters</p>
            )}
          </div>

        
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            {!isEmailValid && email && (
              <p style={{ color: "red" }}>Enter a valid email</p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
            {!isPasswordValid && password && (
              <p style={{ color: "red" }}>
                Password must be at least 8 characters
              </p>
            )}
          </div>

        
          <div className="form-group">
            <label>Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              required
            />
            {!isConfirmPasswordValid && confirmPassword && (
              <p style={{ color: "red" }}>Passwords do not match</p>
            )}
          </div>

        
          <button
            type="submit"
            className="btn-register"
            disabled={!isFormValid}
            style={{
              background: isFormValid ? "#0073e6" : "#ccc",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            Register
          </button>
        </form>

        {successMessage && (
          <p style={{ color: "green", fontWeight: "bold", marginTop: "15px" }}>
            {successMessage}
          </p>
        )}

     
        <p className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}



