import React from "react";
import HomeLayout from "./components/HomeLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestoDetails from "./components/RestoDetails";
import NotFound from "./components/NotFound"; // Import the Not Found component

const AntreanApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/restoran/:restaurantId" element={<RestoDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for Not Found */}
      </Routes>
    </BrowserRouter>
  );
};

export default AntreanApp;
