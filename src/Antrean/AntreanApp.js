import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "./components/Carousel";
import RestoCard from "./components/RestoCard";
import restaurants from './data/Restaurants';

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

function AntreanApp() {
  // Filter restaurants by category, e.g., "dekat"
  const filteredRestaurantsTerdekat = restaurants.filter(
    (restaurant) => restaurant.kategori === "dekat"
  );

      // Filter restaurants by category, e.g., "sponsor"
  const filteredRestaurantsSponsor = restaurants.filter(
    (restaurant) => restaurant.kategori === "sponsor"
  );

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Carousel />
        <RestoCard filteredRestaurants={filteredRestaurantsTerdekat} />
        <RestoCard filteredRestaurants={filteredRestaurantsSponsor} />
      </div>
    </ThemeProvider>
  );
}


export default AntreanApp;
