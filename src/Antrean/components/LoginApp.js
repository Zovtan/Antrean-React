import React, { useState } from "react";
/* import "../styles/login.css"; */
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Container,
  TextField,
  Divider,
} from "@mui/material";
import logoPurp from "../assets/Jumlah.png";
import Group14 from "../assets/Group 14.png";
import { useNavigate } from "react-router-dom";

const LoginApp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const [isAccountRight, setIsAccountRight] = useState(true);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check against valid credentials
    if (
      (email === "antoni@gmail.com" && password === "antoni123") ||
      (email === "admin@gmail.com" && password === "admin")
    ) {
      // Successful login, you can navigate to another page or perform other actions
      setIsAccountRight(true);
      navigate("/beranda");
    } else {
      // Invalid credentials, display an error message or take appropriate action
      setIsAccountRight(false);
    }
  };

  return (
    <div
      className="log-container"
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundColor: "#d7e3fe",
        alignItems: "flex-start", // Change "center" to "flex-start"
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <div
        className="header"
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "8vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "fixed",
          padding: "30px 10%",
          zIndex: "9",
        }}
      >
        <Box component="img" src={logoPurp} height="2.5em" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5vh",
          marginTop:"8em"
        }}
      >
        <Box
          component="img"
          src={Group14}
          alt="group"
          width="40%"
          sx={{ display: { xs: "none", md: "flex" } }}
        />

        <Container
          disableGutters
          maxWidth="xs"
          sx={{ backgroundColor: "white", padding: "5vh", margin: "0" }}
        >
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" align="center" gutterBottom>
              Masuk
            </Typography>

            <TextField
              type="email"
              label="Email atau No. Handphone"
              placeholder="Email atau No. Handphone"
              fullWidth
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Password"
              placeholder="Password"
              margin="normal"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox onClick={handlePasswordVisibility} color="primary" />
              }
              label="Lihat Sandi"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
                        {!isAccountRight && (
            <Typography color="error" >
              Email atau password salah!
            </Typography>
          )}
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                sx={{ width: "100%", marginY: "3vh" }}
              >
                Masuk
              </Button>

              <Link
                href="#"
                variant="body2"
                className="forgot"
                sx={{ textDecoration: "none" }}
              >
                Lupa Password
              </Link>
            </Box>

            <Divider sx={{ marginY: "3vh" }} />
          </form>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={() => {
                navigate("/register");
              }}
            >
              Buat Akun
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LoginApp;
