import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/Daraz-logo.png'; // Ajusta la ruta según la ubicación del logo
import CartButton from '../cart/CartButton';

const Header = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/products/category/${category}`);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Cococho Logo" />
            </div>
            <nav className="header__nav">
                <Link to="/">INICIO</Link>
                <button onClick={() => handleCategoryClick('bebé')}>BEBÉ</button>
                <button onClick={() => handleCategoryClick('beba')}>BEBA</button>
                <button onClick={() => handleCategoryClick('niñas')}>NIÑAS</button>
                <button onClick={() => handleCategoryClick('niños')}>NIÑOS</button>
                <button onClick={() => handleCategoryClick('accesorios')}>ACCESORIOS</button>
                <button onClick={() => handleCategoryClick('juguetes')}>JUGUETES</button>
                <button onClick={() => handleCategoryClick('Rodados')}>RODADOS</button>
            </nav>
            <div className="header__actions">
                <input type="text" placeholder="Search" className="header__search" />
                <Link to="/login" className="header__login">Iniciar sesión</Link>
                <CartButton/>
            </div>
        </header>
    );
};

export default Header;
