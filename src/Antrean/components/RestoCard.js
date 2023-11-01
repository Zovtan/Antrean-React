import React from "react";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RestoCard = (props) => {
  const { filteredRestaurants } = props;

  return (
    <Container sx={{ display: "flex", overflow: "auto", overflowY:"hidden", scrollBehavior:"smooth", msOverflowStyle:"none", scrollbarWidth:"none" }}>
      {filteredRestaurants.map((restaurant, index) => (
        <Card key={index} sx={{ minWidth: 250, flex: "0 0 auto", margin: "8px" }}>
          <CardContent>
          <img src={restaurant.img} width="250"/>
            <Typography variant="h5" component="div">
              {restaurant.nama}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {restaurant.keramaian}
            </Typography>
            <Typography variant="body2">
              {restaurant.rating}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default RestoCard;
