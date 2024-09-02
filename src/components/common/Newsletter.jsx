// src/components/common/Newsletter.jsx

import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__container">
                <h2 className="newsletter__title">NEWSLETTER</h2>
                <p className="newsletter__subtitle">Recibí todas las promos, para los peques de la casa.</p>
                <p className="newsletter__text">¿Quieres recibir nuestras promos? ¡Regístrate ya mismo!</p>
                <form className="newsletter__form">
                    <div className="newsletter__input-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="newsletter__input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Ingresa un correo válido" />
                    </div>
                    <button type="submit" className="newsletter__button">ENVIAR</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
