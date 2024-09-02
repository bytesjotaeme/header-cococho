import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Ayuda</h4>
                <ul>
                    <li><a href="#faq">Preguntas frecuentes</a></li>
                    <li><a href="#how-to-buy">Cómo comprar</a></li>
                    <li><a href="#size-guide">Guía de talles</a></li>
                    <li><a href="#about-us">Quiénes somos</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Ubicación</h4>
                <p>Juangorena 1255 - Concepción, Tucumán</p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.870622618724!2d-65.5951832848446!3d-27.33826328294711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423a3f9a67bb715%3A0x7eb3b5b7b04192b8!2sConcepci%C3%B3n%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1624548093753!5m2!1sen!2sar" 
                    width="200" 
                    height="150" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
            <div className="footer-section">
                <h4>Contacto</h4>
                <p>Texto de ejemplo de pie de página</p>
                <p>Síguenos en nuestras redes sociales!</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
