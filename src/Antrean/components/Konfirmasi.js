import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import restaurants from "../data/Restaurants";

const Konfirmasi = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // mengambil data dari url
  const id = queryParams.get("id")
  const tanggal = queryParams.get("tanggal");
  const waktu = queryParams.get("waktu");
  const jumlahOrang = queryParams.get("jumlahOrang");
  const kodePromo = queryParams.get("kodePromo");

  // membandingkan data id dari url dgn data restoran agar dpt memakai data dari situ
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === parseInt(id, 10)
  );

  return (
    <>
    {/* <Navbar /> */}
      <h1>{restaurant.nama}</h1>
      <p>Tanggal: {tanggal}</p>
      <p>Waktu: {waktu}</p>
      <p>Jumlah Orang: {jumlahOrang}</p>
      <p>Kode Promo: {kodePromo}</p>
      {/* Display or use the extracted values as needed */}
    </>
  );
};

export default Konfirmasi;
