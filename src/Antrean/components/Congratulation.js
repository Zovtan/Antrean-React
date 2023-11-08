import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
    <div>
      <Typography variant="h4">Congratulations!</Typography>
      <Typography variant="body1">Your reservation has been confirmed.</Typography>
      {/* Add any additional content you want to display on the congratulations screen. */}
    </div>
  );
};

export default Congratulation;
