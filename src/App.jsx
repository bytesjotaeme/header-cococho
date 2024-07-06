import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/common/Header';
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

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Cart /> {/* El carrito sigue estando siempre visible */}
                    <Routes>
                        <Route path="/" element={
                            <>
                                <PromotionsSlider />
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
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
