import React, { useState } from "react";
import "../css/login.css";
import { Button, Divider, TextField, Typography } from "@mui/material";

import Group14 from "../assets/Group14.png";

const Login = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email :", email);
    console.log("Password :", password);
  };

  return (
    <div className="log-container">
      <div className="pic-log">
        <img className="image" src={Group14} alt="group" />
      </div>
      <form className="form-container" action="" onSubmit={handleSubmit}>
        <div className="loginForm">
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              m: "20px",
              fontWeight: "bold",
              color: "#3D30A2",
            }}
          >
            {action}
          </Typography>
          <Divider />
          <div className="inputform">
            <TextField
              sx={{ margin: "8px 0" }}
              id="outlined-basic"
              label="Masukkan Email atau No. HP"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputform">
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="submit-container">
            <Button
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
              onClick={() => {
                setAction("Sign In");
              }}
            >
              Sign In
            </Button>
            <a href="#" className="forgot">
              Lupa Password
            </a>
            <hr />
            <Button
              variant="contained"
              sx={{
                width: "150px",
                height: "45px",
                borderRadius: "20px",
                cursor: "pointer",
                bgcolor: "#9f9ed3",
                "&:hover": {
                  bgcolor: "#7472cc",
                },
              }}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
