import React from 'react';
import Slider from 'react-slick';
import './PromotionSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PromotionsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide slide1">
          <div className="slide-content">
            <h2>Encontrá todo para tus peques</h2>
            <h1>COLECCIÓN INVIERNO</h1>
            <h1>2024</h1>
            <button className="cta-button">VER MÁS</button>
          </div>
          <img src="/src/assets/images/promo1.jpg" alt="Promotion 1" className="slide-image"/>
          <img src="/src/assets/images/inner-image.jpg" alt="Inner Image" className="inner-image"/>
        </div>
        <div className="slide slide2">
          <div className="slide-content">
            <h2>CONOCE NUESTRAS PROMOCIONES</h2>
            <h1>SÍGUENOS EN</h1>
            <h1>REDES SOCIALES</h1>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/images/instagram-icon.png" alt="Instagram" className="social-icon"/>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/src/assets/images/facebook-icon.png" alt="Facebook" className="social-icon"/>
              </a>
            </div>
          </div>
          <img src="/src/assets/images/promo2.jpg" alt="Promotion 2" className="slide-image"/>
        </div>
        <div className="slide slide3">
          <div className="slide-content slide-content-3">
            <h1>COCOCHO DAYS</h1>
            <h2>APROVECHA HASTA 6 CUOTAS</h2>
            <h2>SIN INTERÉS EN PRODUCTOS SELECCIONADOS</h2>
          </div>
          <img src="/src/assets/images/promo3.jpg" alt="Promotion 3" className="slide-image"/>
        </div>
      </Slider>
    </div>
  );
};

export default PromotionsSlider;
