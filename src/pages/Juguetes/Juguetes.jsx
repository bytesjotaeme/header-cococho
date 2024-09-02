import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Juguetes.module.css';

const Juguetes = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Simulación de llamada a una API para obtener productos
        const fetchedProducts = [
            { id: 25, name: 'Pelota', price: 8.00, discountPrice: 6.00, img: '/src/assets/images/image25.jpg' },
            { id: 26, name: 'Muñeca', price: 20.00, discountPrice: 15.00, img: '/src/assets/images/image26.jpg' },
            { id: 27, name: 'Carrito', price: 18.00, discountPrice: 14.00, img: '/src/assets/images/image27.jpg' },
            { id: 28, name: 'Lego', price: 30.00, discountPrice: 25.00, img: '/src/assets/images/image28.jpg' },
            { id: 29, name: 'Rompecabezas', price: 15.00, discountPrice: 12.00, img: '/src/assets/images/image29.jpg' },
            { id: 30, name: 'Avión', price: 25.00, discountPrice: 20.00, img: '/src/assets/images/image30.jpg' },
        ];
        setProducts(fetchedProducts);
    }, []);

    useEffect(() => {
        // Establecer la categoría seleccionada según la ruta actual
        const path = location.pathname.substring(1); // Quita la barra inicial "/"
        setSelectedCategory(path);
    }, [location.pathname]);

    const handleCategoryChange = (e) => {
        navigate(`/${e.target.value}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <h1>Juguetes</h1>
                <p>Descubrí nuestra amplia gama de juguetes para todas las edades, desde pelotas hasta rompecabezas, para que tus hijos se diviertan al máximo.</p>
            </div>
            <select onChange={handleCategoryChange} className={styles.dropdown} value={selectedCategory}>
                <option value="bebes">Bebés</option>
                <option value="ninas">Niñas</option>
                <option value="ninos">Niños</option>
                <option value="accesorios">Accesorios</option>
                <option value="juguetes">Juguetes</option>
            </select>
            <div className={styles.productList}>
                {products.map(product => (
                    <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product.id)}>
                        <img src={product.img} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>${product.price.toFixed(2)} <span>${product.discountPrice.toFixed(2)}</span></p>
                        <button>Detalle de Producto</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Juguetes;
