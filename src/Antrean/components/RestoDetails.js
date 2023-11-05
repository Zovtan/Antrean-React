import React, {useState} from "react";
import restaurants from "../data/Restaurants";
import { useParams } from "react-router-dom";
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
  Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions 
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { limitAlamat } from "./utils/limitTexts.js";

const RestoDesc = () => {
  //apakah form terbuka?
  const [isFormOpen, setIsFormOpen] = useState(false);

  /* mengambil id dari url */
  const { restaurantId } = useParams(); 
  
  /* ini berguna utk mencari objek restoran dalam array restaurants yang cocok dengan restaurantId yang diberikan sebagai parameter dalam rute. Ini berfungsi untuk menampilkan detail restoran berdasarkan ID yang diberikan pada halaman deskripsi restoran. */
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === parseInt(restaurantId, 10)
  ); 

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
        <img src={restaurant.img} alt={restaurant.nama} />
      </Container>

      <Container
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "red",
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
        maxWidth="x1"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "blue",
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
              Jadwal Kami:{" "}
              <ul>
                {restaurant.jadwal.map((jadwal, index) => (
                  <li key={index}>{jadwal}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Card>

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
              {" "}
              <ul>
                {restaurant.kontak.socialMedia.map((social, index) => (
                  <li key={index}>{social}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="x1" sx={{display:"flex", justifyContent:"center", margin:"5vh", backgroundColor:"black"}}>
      <Button variant="contained" size="large" onClick={() => setIsFormOpen(true)}>
  Antri
</Button>
      </Container>
      
      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
  <DialogTitle>Antri</DialogTitle>
  <DialogContent>
    <TextField
      label="Name"
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <TextField
      label="Phone"
      variant="outlined"
      fullWidth
      margin="normal"
    />
    {/* Add more form fields as needed */}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setIsFormOpen(false)} color="primary">
      Cancel
    </Button>
    <Button onClick={() => setIsFormOpen(false)} color="primary">
      Submit
    </Button>
  </DialogActions>
</Dialog>
    </>
  );
};

export default RestoDesc;
