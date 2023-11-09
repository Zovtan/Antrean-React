import React, { useState } from "react";
import restaurants from "../data/Restaurants";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/RestoDetails.css";
import Navbar from "./Navbar.js";
import NotFound from "./NotFound.js";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Rating,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  InputAdornment,
  Box, Alert, AlertTitle,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { limitAlamat } from "./utils/limitTexts.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";

const RestoDetails = () => {
  //apakah form terbuka?
  const [isFormOpen, setIsFormOpen] = useState(false);

  /* mengambil id dari url */
  const { restaurantId } = useParams();

  /* ini berguna utk mencari objek restoran dalam array restaurants yang cocok dengan restaurantId yang diberikan sebagai parameter dalam rute. Ini berfungsi untuk menampilkan detail restoran berdasarkan ID yang diberikan pada halaman deskripsi restoran. */
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === parseInt(restaurantId, 10)
  );

  /* navigasi ke konfirmasi */
  const navigate = useNavigate();

  // State variables to store the input values
  const [tanggal, setTanggal] = useState(dayjs(new Date()));
  const [waktu, setWaktu] = useState(dayjs());
  const [jumlahOrang, setJumlahOrang] = useState(1);
  const [kodePromo, setKodePromo] = useState("");

  //state input eror
  const [jumlahOrangError, setJumlahOrangError] = useState("");
  const [tanggalError, setTanggalError] = useState("");
  const [waktuError, setWaktuError] = useState("");

  
  const handleFormSubmit = () => {
    //apakah form valid?
    let isFormValid = true;

    //validasi jumlah org
    if (jumlahOrang <= 0 || jumlahOrang > 20) {
      // Disable submit when jumlahOrang is not a positive number or above 20.
      setJumlahOrangError("Jumlah orang harus berada antara 1 dan 20.");
      isFormValid = false;
      return;
    } else {
      setJumlahOrangError("");
    }

    //validasi tanggal
    const currentDate = dayjs().startOf("day"); // Set the time components to the start of the day
    const selectedDate = tanggal.startOf("day"); // Set the time components of the selected date to the start of the day

    if (selectedDate.isBefore(currentDate)) {
      // Disable submit when a past date is picked.
      setTanggalError("Tidak dapat memilih tanggal yang sudah lewat");
      isFormValid = false;
      console.log(currentDate);
    } else {
      setTanggalError("");
    }

    //validasi waktu tapi diberi kelegaan 5 menit agar tdk ditolak pada detik pertama di buat form 
    const currentTime = dayjs().subtract(5, "minutes");
    const selectedTime = waktu; // Set the time components to the start of the minute
  
    if (selectedTime.isBefore(currentTime)) {
      // Disable submit when a time within the 5-minute window is picked.
      setWaktuError("Tidak dapat memilih waktu yang sudah lewat");
      isFormValid = false;
    } else {
      setWaktuError("");
    }

    // mengirim data melalui url agar dapat dipakai ulang
    if (isFormValid) {
      const queryParams = new URLSearchParams();
      queryParams.append("id", restaurant.id);
      queryParams.append("esWaktu", restaurant.esWaktu);
      queryParams.append("tanggal", tanggal.format("dddd, DD MMMM YYYY"));
      queryParams.append("tanggalRumus", tanggal);
      /*     queryParams.append("waktu", waktu.format("h mm A")); */
      queryParams.append("waktu", waktu.format("HH mm"));
      queryParams.append("jumlahOrang", jumlahOrang);
      queryParams.append("kodePromo", kodePromo);

      // Navigate to the "konfirmasi" page with query parameters
      navigate(
        `/restoran/${restaurant.id}/konfirmasi?${queryParams.toString()}`
      );
    }
  };

  if (!restaurant) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <Container
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#d9e5ff",
        }}
      >
        <Box
          component="img"
          src={restaurant.img}
          alt={restaurant.nama}
          sx={{ width: "80vh", height: "40vh" }}
        />
      </Container>

      <Container
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          <Typography variant="h5" fontWeight="bolder">
            {restaurant.nama}
          </Typography>
          <Rating name="read-only" value={restaurant.rating} readOnly />
        </span>

        <span className="rightMiniInfo">
          <Typography variant="h6" fontWeight="bolder">
            <LocationOnIcon color="primary" /> {limitAlamat(restaurant.alamat)}
            {/* memotong alamat yg kepanjangan */}
          </Typography>
          <Typography variant="h6" fontWeight="bolder">
            <GpsFixedIcon color="primary" /> {restaurant.jarak}
          </Typography>
        </span>
      </Container>

      <Container
        disableGutters
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "3vh",
          padding: "0 10%",
        }}
      >
        <Card sx={{ flex: "0 0 auto", width: "50vh" }}>
          <CardHeader
            title="Deskripsi"
            sx={{ backgroundColor: "#7472cc", color: "white" }}
          ></CardHeader>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10",
              justifyContent: "space-between",
              gap: "1vh",
            }}
          >
            <Typography>{restaurant.desc}</Typography>
            <Typography>
              Jadwal Kami:
              <ul>
                {restaurant.jadwal.map((jadwal, index) => (
                  <li key={index}>{jadwal}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color={
              restaurant.keramaian === "sepi"
                ? "green"
                : restaurant.keramaian === "sedang"
                ? "#ffc400"
                : "red"
            }
          >
            ~{restaurant.esWaktu} menit{" "}
            <span className="waktuAntri">waktu antri</span>
          </Typography>
          <div>
            {restaurant.keramaian === "sepi" && (
              <PersonIcon sx={{ fontSize: 120, color: "green" }} />
            )}{" "}
            {restaurant.keramaian === "sedang" && (
              <PeopleIcon sx={{ fontSize: 120, color: "#ffc400" }} />
            )}{" "}
            {restaurant.keramaian === "ramai" && (
              <GroupsIcon sx={{ fontSize: 120, color: "red" }} />
            )}
          </div>
        </Box>

        <Card sx={{ flex: "0 0 auto", width: "50vh", textAlign: "right" }}>
          <CardHeader
            title="Kontak"
            sx={{ backgroundColor: "#7472cc", color: "white" }}
          ></CardHeader>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "10",
              gap: "1vh",
            }}
          >
            <Typography>
              <ul>
                {restaurant.kontak.socialMedia.map((social, index) => (
                  <li key={index}>{social}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "5vh",
          marginTop: "3vh",
          marginLeft: "0",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => setIsFormOpen(true)}
        >
          Antri
        </Button>
        <Button
          variant="text"
          color="error"
          onClick={() => {
            navigate("/");
          }}
        >
          Kembali
        </Button>
      </Container>

      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <DialogTitle>Info Reservasi</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="timeCont">
              <DatePicker
                label="Tanggal"
                sx={{ marginTop: "3vh" }}
                value={tanggal}
                onChange={(date) => setTanggal(date)}
                format="DD-MM-YYYY"
                error={tanggalError.length > 0}
                helperText={tanggalError}
              />
              <TimePicker
                label="Waktu"
                sx={{ marginTop: "3vh" }}
                value={waktu}
                onChange={(time) => setWaktu(time)}
                error={waktuError.length > 0}
                helperText={waktuError}
              />
            </div>
          </LocalizationProvider>

          <TextField
            label="Jumlah Orang"
            type="number"
            fullWidth
            sx={{ marginTop: "3vh" }}
            inputProps={{ min: 1, max: 20 }}
            value={jumlahOrang}
            onChange={(e) => setJumlahOrang(e.target.value)}
            error={jumlahOrangError.length > 0}
            helperText={jumlahOrangError}
          />

          <TextField
            label="Kode Promo"
            fullWidth
            sx={{ marginTop: "3vh" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LoyaltyIcon />
                </InputAdornment>
              ),
            }}
            value={kodePromo}
            onChange={(e) => setKodePromo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsFormOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

{/*       <>
      {isFormValid ? null : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Jangan isi waktu masa lalu!
        </Alert>
      )}
    </> */}
    </>
  );
};

export default RestoDetails;
