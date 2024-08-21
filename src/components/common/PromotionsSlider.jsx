import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './PromotionSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PromotionsSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/images');
        const data = await response.json();
        setImages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = images.length === 1 ? [...images, ...images, ...images] : images;

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className={`slide slide${index + 1}`}>
            <div className="slide-content">
              <h2>Slide {index + 1}</h2>
              <h1>Contenido personalizado</h1>
              <button className="cta-button">VER MÁS</button>
            </div>
            <img src={image.url} alt={`Promotion ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PromotionsSlider;
