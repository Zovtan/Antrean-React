import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import RestoCard from "./RestoCard";
import restaurants from "../data/Restaurants";
import { Typography } from "@mui/material";
import SearchResto from "./SearchResto";
import Footer from "./Footer";

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
      <>
        <Navbar />
        <Carousel />
        <SearchResto unfilteredRestaurants={restaurants}/>
        <Typography
          variant="h4"
          id="terdekat"
          sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
        >
          Restoran Terdekat
        </Typography>
        <RestoCard filteredRestaurants={filteredRestaurantsTerdekat} />
        <Typography
          variant="h4"
          id="sponsor"
          sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
        >
          Sponsor
        </Typography>
        <RestoCard filteredRestaurants={filteredRestaurantsSponsor} />
        <Typography
          variant="h4"
          id="populer"
          sx={{ fontWeight: "bolder", mt: "5vh", ml: "5vh" }}
        >
          Restoran Populer
        </Typography>
        <RestoCard filteredRestaurants={filteredRestaurantsPopuler} />
        <Footer/>
      </>
  );
}

export default HomeLayout;
