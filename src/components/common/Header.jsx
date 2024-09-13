import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../assets/images/Remove-bg.ai.png'; // Ajusta la ruta según la ubicación del logo
import CartButton from '../cart/CartButton';
import { AuthContext } from '../../contexts/Context';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    const navigate = useNavigate();
    const handleCategoryClick = (category) => {
        navigate(`/products/category/${category}`);
    };
    const handleRedirect = () => {
        navigate('/');
      };
    const {isAuthenticated, logout} = useContext(AuthContext);
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Cococho Logo" />
            </div>
            <Navbar expand="md">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto header__nav" >
                            {/* <Link to="/">INICIO</Link> */}
                            <button onClick={handleRedirect}>HOME</button>
                            <button onClick={() => handleCategoryClick('bebé')}>BEBÉ</button>
                            <button onClick={() => handleCategoryClick('beba')}>BEBA</button>
                            <button onClick={() => handleCategoryClick('niñas')}>NIÑAS</button>
                            <button onClick={() => handleCategoryClick('niños')}>NIÑOS</button>
                            <button onClick={() => handleCategoryClick('accesorios')}>ACCESORIOS</button>
                            <button onClick={() => handleCategoryClick('juguetes')}>JUGUETES</button>
                            <button onClick={() => handleCategoryClick('Rodados')}>RODADOS</button>
                            {/* <input type="text" placeholder="Search" className="header__search" /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <div className="header__actions">
                    {isAuthenticated ? (
                        <Link to="/">
                            <Button className="btn-login" onClick={logout}>
                                Cerrar Sesión
                            </Button>
                        </Link>
                        ) : (
                        <Link to="/admin/login">
                                <Button className="btn-login">
                                    Iniciar Sesión
                                </Button>
                            </Link>
                    )}

                        
                    {/* <Link to="/admin/login" className="header__login">Iniciar sesión</Link> */}
                </div>
                <CartButton/>
        </header>
    );
};

export default Header;
