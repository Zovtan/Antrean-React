import React from "react";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "./Carousel";
import RestoCard from "./RestoCard";
import restaurants from "../data/Restaurants";
import { Typography } from "@mui/material";
import SearchResto from "./SearchResto";

const primary = {
  main: "#7472cc",
  light: "#9f9ed3",
  dark: "#5c5ba1",
  contrastText: "#fff",
};
const theme = createTheme({
  palette: {
    primary: primary,
    // You can also define other palettes like secondary if needed
    // secondary: { ... },
  },
});

function HomeLayout() {
  // Filter restaurants by category, e.g., "dekat"
  const filteredRestaurantsTerdekat = restaurants.filter(
    (restaurant) => restaurant.kategori === "terdekat"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsSponsor = restaurants.filter(
    (restaurant) => restaurant.kategori === "sponsor"
  );

  // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsPopuler = restaurants.filter(
    (restaurant) => restaurant.kategori === "populer"
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Carousel />
        <SearchResto unfilteredRestaurants={restaurants}/>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
        >
          Restoran Terdekat
        </Typography>
        <RestoCard filteredRestaurants={filteredRestaurantsTerdekat} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
        >
          Sponsor
        </Typography>
        <RestoCard filteredRestaurants={filteredRestaurantsSponsor} />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
        >
          Restoran Populer
        </Typography>
        <RestoCard filteredRestaurants={filteredRestaurantsPopuler} />
      </div>
    </ThemeProvider>
  );
}

export default HomeLayout;
