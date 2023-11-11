import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import berhasil from "../assets/berhasil.png"

const Congratulation = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Use useEffect to navigate back to the home page after 5 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/"); // Navigate back to the home page
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout to prevent any unexpected navigation if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Container maxWidth="x1" sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh", textAlign:"center", backgroundColor:"#7472cc"}}>
      <Box backgroundColor="white" height="100vh" width="90vh"><Typography variant="h3" fontWeight="bolder" my="5vh">Reservasi Berhasil!</Typography>
      <Box component="img" src={berhasil} width="70vh" />
      <Typography variant="h5" my="5vh">Terimakasih atas reservasi Anda</Typography></Box>
      
      {/* Add any additional content you want to display on the congratulations screen. */}
    </Container>
  );
};

export default Congratulation;
