import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/CardSlider.css";
import Rating from "@mui/material/Rating";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import { Container } from "@mui/material";

const SearchResto = (props) => {
  /* menerima filter dari AntreanApp agar sesuai dgn kategori */
  const { unfilteredRestaurants } = props;

  /* fitur search dengan delay 1 detik */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(unfilteredRestaurants);

  useEffect(() => {
    const timer = setTimeout(() => {
      // search berjalan setelah 1 dtk
      const results = unfilteredRestaurants.filter((restaurant) =>
        restaurant.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm, unfilteredRestaurants]);

  const handleSearchChange = (event) => {
    // update searchTerm saat ada perubahan di search bar
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && ( // Hanya render hasil search ketika ada isi
        <Container
          maxWidth="x1"
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            margin: "0 auto",
            mt: "5vh",
          }}
        >
          {searchResults.map((restaurant, index) => (
            <Card key={index} sx={{ maxWidth: 200 }}>
              <CardContent sx={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"0" }}>
                <img
                  className="restImg"
                  src={restaurant.img}
                  alt={restaurant.nama}
                  width="200px"
                />
                <Rating name="read-only" value={restaurant.rating} readOnly />
                <Typography variant="h5" component="h5" fontWeight="bolder">
                  {restaurant.nama}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={
                    restaurant.keramaian === "sepi"
                      ? "green"
                      : restaurant.keramaian === "sedang"
                      ? "#ffc400"
                      : "red"
                  }
                >
                  {restaurant.esWaktu}{" "}
                  <span className="waktuAntri">waktu antri</span>
                </Typography>
                <div>
                  {restaurant.keramaian === "sepi" && (
                    <PersonIcon sx={{ fontSize: 60, color: "green" }} />
                  )}
                  {restaurant.keramaian === "sedang" && (
                    <PeopleIcon sx={{ fontSize: 60, color: "#ffc400" }} />
                  )}
                  {restaurant.keramaian === "ramai" && (
                    <GroupsIcon sx={{ fontSize: 60, color: "red" }} />
                  )}
                </div>
              </CardContent>
              <CardActions sx={{ margin: "0", padding: "0" }}>
                <Button size="large" sx={{ margin: "0 auto", padding: "5" }}>
                  Antri sekarang!
                </Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
};

export default SearchResto;
