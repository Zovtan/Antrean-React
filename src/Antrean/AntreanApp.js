import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from "./components/Carousel";

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
  return (
    <ThemeProvider theme={theme}><div>
      <Navbar />
      <Carousel/>
    
    </div></ThemeProvider>
    
  );
}

export default AntreanApp;
