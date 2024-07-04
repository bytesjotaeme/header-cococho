import React from 'react';
import './Header.css';
import logo from '../../assets/images/Daraz-logo.png'; // Ajusta la ruta según la ubicación del logo

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Cococho Logo" />
            </div>
            <nav className="header__nav">
                <a href="/">INICIO</a>
                <a href="/bebes">BEBÉS</a>
                <a href="/ninas">NIÑAS</a>
                <a href="/ninos">NIÑOS</a>
                <a href="/accesorios">ACCESORIOS</a>
                <a href="/juguetes">JUGUETES</a>
            </nav>
            <div className="header__actions">
                <input type="text" placeholder="Search" className="header__search" />
                <a href="/login" className="header__login">Iniciar sesión</a>
                <div className="header__cart">
                    <a href="/cart">
                        <span className="header__cart-icon"></span>
                        <span className="header__cart-count">0</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
