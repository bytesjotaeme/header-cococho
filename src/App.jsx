// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
// import { CartProvider } from './components/CartContext'; // Actualiza la ruta si es necesario
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
import CartModal from './components/cart/CartModal'; // Importa el CartModal
// import './assets/styles/global.css';
import ProductosDestacados from './components/common/ProductosDestacados';
import PublicidadSlider from './components/common/PublicidadSlider';
import Categorias from './components/common/Categorias';
import ProductAdmin from './pages/Admin/ProductAdmin';
import ProductEdit from './components/Admin/ProductEdit';
import ProductAdd from './components/Admin/ProductAdd';
import ProductosOferta from './components/common/ProductosOferta';
import ProductosTemporada from './components/common/ProductosTemporada';
import EditCarouselImages from './components/common/EditCarouselImages';
import ProductsByCategory from './pages/Accesorios/Accesorios';
import Login from './pages/Admin/Login';
import { AuthProvider } from './contexts/Context';
import PrivateRoute from './routes/PrivateRoutes';
import Error404 from './pages/Error404';
import ScrollToTopButton from './components/common/ScrollToTopButton';

function App() {
    return (
        <AuthProvider>
        <CartProvider>
            <Router>
                <div className="App">
                    <Header />
                    <CartModal /> 
                    <Routes>
                        <Route path="/" element={
                            <>
                                <PromotionsSlider />
                                <ProductosOferta/>
                                <ProductosTemporada/>
                                <ProductosDestacados />
                                <Categorias />
                                <PublicidadSlider />
                                <Newsletter />
                                <ScrollToTopButton/>
                            </>
                        } />
                        <Route path="/cart" element={<CartModal asPage={true} />} /> {/* Ruta específica para mostrar el carrito como página */}
                        <Route path="/productos" element={<Bebes />} />
                        <Route path="/ninas" element={<Ninas />} />
                        <Route path="/ninos" element={<Ninos />} />
                        <Route path="/products/category/:category" element={<ProductsByCategory />} />
                        <Route path="admin/login" element={<Login/>} />
                        <Route path="/accesorios" element={<Accesorios />} />
                        <Route path="/juguetes" element={<Juguetes />} />
                        <Route path="/producto/:productId" element={<ProductDetails />} />
                        <Route path="*" element={<Error404/>} />
                        <Route element={<PrivateRoute/>}>
                            <Route path="admin/products" element={<ProductAdmin/>}/>
                            <Route path="admin/products/update/:id" element={<ProductEdit/>}/>
                            <Route path="admin/products/add" element={<ProductAdd/>}/>
                            <Route path="admin/carrusel" element={<EditCarouselImages/>}/>
                        </Route>
                    </Routes>
                    <Footer /> {/* Agrega el Footer aquí */}
                </div>
            </Router>
        </CartProvider>
        </AuthProvider>
    );
}

export default App;
