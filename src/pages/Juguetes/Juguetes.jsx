import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Juguetes.module.css';

const Juguetes = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

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

    const handleProductClick = (id) => {
        navigate(`/producto/${id}`);
    };

    return (
        <div className={styles.container}>
            <h1>Juguetes</h1>
            <select onChange={(e) => navigate(`/${e.target.value}`)} className={styles.dropdown}>
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
                        <button onClick={() => handleProductClick(product.id)}>AGREGAR AL CARRO</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Juguetes;
