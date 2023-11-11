import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/CardSlider.css";
import Rating from "@mui/material/Rating";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CardSlider.css";
import SearchIcon from '@mui/icons-material/Search';

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

  /* setting carousel cards */
  const settings = {
    infinite: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true /* live saver on god, g ada dokumentasi T-T padahal perlu, membuat width card tepat dgn apa yg kita set di jsx sama yg dibilang sama org stackoverflow: 
    This will allow you to edit the width in your CSS where you can, generically use:

    .slick-slide {
        width: 100%;
    }
    
    or in this case:
    
    .featured {
        width: 100%;

    anehnya buat responsive: g jln
    }
     */,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent:"center", marginTop:"2em" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Cari Restoran" variant="standard" type="text"
        placeholder="Restoran..."
        value={searchTerm}
        onChange={handleSearchChange}/>
      </Box>
      {searchTerm && ( // Hanya render hasil search ketika ada isi
        <Container
          className="cardCont"
          disableGutters
          maxWidth="x1"
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            margin: "0 auto",
            mt: "5vh",
            pl:"5vh"
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bolder", mb: "5vh" }}
          >
            Hasil Carian
          </Typography>
          <Slider {...settings}>
            {searchResults.map((restaurant, index) => (
              <Link to={`/restoran/${restaurant.id}`}>
                <Card
                  className="cards"
                  key={index}
                  sx={{ flex: "0 0 auto", width: { xs: "23vh", md: "30vh" } }}
                >
                  <CardMedia
                    component="img"
                    image={restaurant.img}
                    alt={restaurant.nama}
                    sx={{ height: {xs:"15vh",md:"20vh"} }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "0",
                      textAlign: "center",
                    }}
                  >

                    <Typography variant="h5" component="h5" fontWeight="bolder"  sx={{ fontSize: { xs: "1.2em", md: "1.5em" } }}>
                      {restaurant.nama}
                    </Typography>                    
                    <Rating
                      name="read-only"
                      value={restaurant.rating}
                      readOnly
                    />
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
                      ~{restaurant.esWaktu} menit {" "}
                      <span className="waktuAntri">waktu antri</span>
                    </Typography>
                    <div>
                      {restaurant.keramaian === "sepi" && (
                        <PersonIcon sx={{ fontSize: {xs:30, md:60}, color: "green" }} />
                      )}
                      {restaurant.keramaian === "sedang" && (
                        <PeopleIcon sx={{ fontSize: {xs:30, md:60}, color: "#ffc400" }} />
                      )}
                      {restaurant.keramaian === "ramai" && (
                        <GroupsIcon sx={{ fontSize: {xs:30, md:60}, color: "red" }} />
                      )}
                    </div>
                  </CardContent>
                  <CardActions sx={{ margin: "0", padding: "0" }}>
                    <Button
                      size="large"
                      sx={{ margin: "0 auto", padding: "5" }}
                    >
                      Antri sekarang!
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            ))}
          </Slider>
        </Container>
      )}
    </>
  );
};

export default SearchResto;
