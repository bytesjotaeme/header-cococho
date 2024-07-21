import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer'; // Importa el Footer aquí
import Newsletter from './components/common/Newsletter';
import PromotionsSlider from './components/common/PromotionsSlider';
import Bebes from './pages/Bebes/Bebes';
import Ninas from './pages/Ninas/Ninas';
import Ninos from './pages/Ninos/Ninos';
import Accesorios from './pages/Accesorios/Accesorios';
import Juguetes from './pages/Juguetes/Juguetes';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './components/common/Cart';
import './assets/styles/global.css';
import ProductosDestacados from './components/common/ProductosDestacados';
import PublicidadSlider from './components/common/PublicidadSlider';
import Categorias from './components/common/Categorias';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Cart />
                    <Routes>
                        <Route path="/" element={
                            <>
                                <PromotionsSlider />
                                <ProductosDestacados />
                                <Categorias />
                                <PublicidadSlider />
                                <Newsletter />
                            </>
                        } />
                        <Route path="/cart" element={<Cart asPage={true} />} />
                        <Route path="/bebes" element={<Bebes />} />
                        <Route path="/ninas" element={<Ninas />} />
                        <Route path="/ninos" element={<Ninos />} />
                        <Route path="/accesorios" element={<Accesorios />} />
                        <Route path="/juguetes" element={<Juguetes />} />
                        <Route path="/producto/:productId" element={<ProductDetails />} />
                    </Routes>
                    <Footer /> {/* Agrega el Footer aquí */}
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
