import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
import { ThemeProvider, createTheme } from "@mui/material";

const tema = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={tema}>
      <Header />
      {/* <Login /> */}
      <Register />
    </ThemeProvider>
  );
}

export default App;
