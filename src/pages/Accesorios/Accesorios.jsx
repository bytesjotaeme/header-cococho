import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Accesorios.module.css';

const Accesorios = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulación de llamada a una API para obtener productos
        const fetchedProducts = [
            { id: 19, name: 'Sombrero', price: 10.00, discountPrice: 8.00, img: '/src/assets/images/image19.jpg' },
            { id: 20, name: 'Bufanda', price: 12.00, discountPrice: 10.00, img: '/src/assets/images/image20.jpg' },
            { id: 21, name: 'Gafas de Sol', price: 15.00, discountPrice: 12.00, img: '/src/assets/images/image21.jpg' },
            { id: 22, name: 'Mochila', price: 20.00, discountPrice: 18.00, img: '/src/assets/images/image22.jpg' },
            { id: 23, name: 'Cinturón', price: 8.00, discountPrice: 6.00, img: '/src/assets/images/image23.jpg' },
            { id: 24, name: 'Reloj', price: 30.00, discountPrice: 25.00, img: '/src/assets/images/image24.jpg' },
        ];
        setProducts(fetchedProducts);
    }, []);

    const handleProductClick = (id) => {
        navigate(`/producto/${id}`);
    };

    return (
        <div className={styles.container}>
            <h1>Accesorios</h1>
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

export default Accesorios;
