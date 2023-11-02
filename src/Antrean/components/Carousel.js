import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css';
import carousel1 from '../assets/carousel 1.png';
import carousel2 from '../assets/carousel 2.png';
import carousel3 from '../assets/carousel 3.png';
import carousel4 from '../assets/carousel 4.png';

class Carousel extends Component {
    render() {
      const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnHover: true,
        arrows: false
      };
      return (
        <div className="carCont">
          <Slider {...settings}>
            <div><img src={carousel1} alt="Credit to Joshua Earle on Unsplash" /></div>
            <div><img src={carousel2} alt="Credit to Alisa Anton on Unsplash" /></div>
            <div><img src={carousel3} alt="Credit to Igor Ovsyannykov on Unsplash" /></div>
            <div><img src={carousel4} alt="Credit to Pierre Châtel-Innocenti on Unsplash" /></div>
          </Slider>
        </div>
      );
    }
}

export default Carousel;
