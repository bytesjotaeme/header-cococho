import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/Daraz-logo.png'; // Ajusta la ruta según la ubicación del logo
import CartButton from '../CartButton';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Cococho Logo" />
            </div>
            <nav className="header__nav">
                <Link to="/">INICIO</Link>
                <Link to="/bebes">BEBÉS</Link>
                <Link to="/ninas">NIÑAS</Link>
                <Link to="/ninos">NIÑOS</Link>
                <Link to="/accesorios">ACCESORIOS</Link>
                <Link to="/juguetes">JUGUETES</Link>
            </nav>
            <div className="header__actions">
                <input type="text" placeholder="Search" className="header__search" />
                <Link to="/login" className="header__login">Iniciar sesión</Link>
                <CartButton/>
                {/* <div className="header__cart">
                    <Link to="/cart">
                        <span className="header__cart-icon"></span>
                        <span className="header__cart-count">0</span>
                    </Link>
                </div> */}
            </div>
        </header>
    );
};

export default Header;

