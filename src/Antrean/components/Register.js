import { useState } from "react";
import "../styles/register.css";
import { TextField, Button } from "@mui/material";

export default function Register() {
  // States for registration
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the username change
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the confirm password change
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      console.log("Success: User registered!");
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h3>User {name} successfully registered!!</h3>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h3>Please enter all the fields</h3>
      </div>
    );
  };

  return (
    <div className="container" >
        <div className="header">
            
        </div>
      <form className="form">
        <div>
          <h1 className="title">Register</h1>
        </div>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div className="input-box">
          <TextField
            sx={{ margin: "8px 0" }}
            id="name"
            label="Nama Lengkap"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="input-box">
          <TextField
            sx={{ margin: "8px 0" }}
            id="name"
            label="Nama Pengguna"
            variant="outlined"
            fullWidth
            required
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="input-box">
          <TextField
            sx={{ margin: "8px 0" }}
            id="name"
            label="Email / No. Handphone"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="input-box">
          <TextField
            sx={{ margin: "8px 0" }}
            id="password"
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="input-box">
          <TextField
            sx={{ margin: "8px 0" }}
            id="password"
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
        </div>
        <div className="submit-container">
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{
              width: "150px",
              height: "45px",
              cursor: "pointer",
              mt: "15px",
              bgcolor: "#9f9ed3",
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "#7472cc",
              },
            }}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}