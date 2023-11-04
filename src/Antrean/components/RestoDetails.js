import React from 'react';
import restaurants from "../data/Restaurants";
import { useParams } from 'react-router-dom';
import "../styles/RestoDetails.css"

const RestoDesc = () => {
    const { restaurantId } = useParams(); /* mengambil id dari url */
    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(restaurantId, 10)); /* ini berguna utk mencari objek restoran dalam array restaurants yang cocok dengan restaurantId yang diberikan sebagai parameter dalam rute. Ini berfungsi untuk menampilkan detail restoran berdasarkan ID yang diberikan pada halaman deskripsi restoran. */

    if (!restaurant) {
        return <div>Restaurant not found</div>;
    }

    return (
        <>
        <h1>{restaurant.nama}</h1>
      <img src={restaurant.img} alt={restaurant.nama} />
      <p>{restaurant.desc}</p>
      <p>Estimated Wait Time: {restaurant.esWaktu}</p>
      <p>Keramaian: {restaurant.keramaian}</p>
      <p>Kategori: {restaurant.kategori}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Alamat: {restaurant.alamat}</p>
      <p>Jarak: {restaurant.jarak}</p>
      <p>Jadwal:</p>
      <pre>{restaurant.jadwal}</pre>
      <p>Kontak:</p>
      <p>Phone: {restaurant.kontak.phone}</p>
      <p>Social Media:</p>
      <ul>
        {restaurant.kontak.socialMedia.map((social, index) => (
          <li key={index}>{social}</li>
        ))}
      </ul>
        </>
    );
}

export default RestoDesc;
