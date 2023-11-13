import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import logoPurp from "../assets/Jumlah.png";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match before submitting
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
    // Add your form submission logic here
    navigate("/");
  };

  return (
    <Container
      disableGutters
      className="regCont"
      maxWidth="x1"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: "5vh",
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

      <Typography variant="h3" textAlign="center" sx={{ paddingTop: "1.5em" }}>
        Daftar Akun
      </Typography>

      <Typography variant="h6" textAlign="center" sx={{mb:"3vh"}}>
        Daftar akun dan dapatkan kemudahan dalam mengantri di restoran favorit
        kamu dan keluarga
      </Typography>

      <Box
        className="daftar"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: "5vh",
          width: "70vh",
          borderRadius:"1vh",
        }}
      >
        <form onSubmit={handleSubmit} style={{width:"100%"}}>
          <Box>
            <Box>
              <Typography className="detail">Nama Lengkap</Typography>
              <TextField
                type="text"
                placeholder="Masukkan Nama Lengkap..."
                required
                fullWidth
                sx={{ mb: "2vh" }}
              />
            </Box>
            <Box>
              <Typography className="detail">Nama Pengguna</Typography>
              <TextField
                type="text"
                placeholder="Masukkan Nama Pengguna..."
                required
                fullWidth
                sx={{ mb: "2vh" }}
              />
            </Box>
            <Box>
              <Typography className="detail">Email / No.Handphone</Typography>
              <TextField
                type="email"
                placeholder="Masukkan Email / No.Hp..."
                required
                fullWidth
                sx={{ mb: "2vh" }}
              />
            </Box>
            <Box>
            <Typography className="detail">Katasandi</Typography>
              <TextField
                type="password"
                placeholder="Masukkan Katasandi..."
                required
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: "2vh" }}
              />
            </Box>
          
            <Box>
              <Typography className="detail">Ulangi Katasandi</Typography>
              <TextField
                type="password"
                placeholder="Ulangi Katasandi..."
                required
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{ mb: "5vh" }}
              />
            </Box>

          </Box>
          {!passwordsMatch && (
            <Typography color="error" sx={{ mb: 2 }}>
              Password tidak sama!
            </Typography>
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" size="large" variant="contained" color="primary" sx={{ width:"100%"}}>
              Daftar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationForm;
