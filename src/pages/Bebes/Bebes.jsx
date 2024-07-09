import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bebes.module.css';

const Bebes = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulación de llamada a una API para obtener productos
        const fetchedProducts = [
            { id: 1, name: 'Buzo nene', price: 12.00, discountPrice: 10.00, img: '/src/assets/images/image1.jpg' },
            { id: 2, name: 'Medias Nena', price: 10.00, discountPrice: 5.00, img: '/src/assets/images/image2.jpg' },
            { id: 3, name: 'Zapatillas Niña', price: 29.00, discountPrice: 20.00, img: '/src/assets/images/image3.jpg' },
            { id: 4, name: 'Cochecito', price: 120.00, discountPrice: 60.00, img: '/src/assets/images/image4.jpg' },
            { id: 5, name: 'Gestos', price: 20.00, discountPrice: 10.00, img: '/src/assets/images/image5.jpg' },
            { id: 6, name: 'Buzo Nena', price: 15.00, discountPrice: 10.00, img: '/src/assets/images/image6.jpg' },
        ];
        setProducts(fetchedProducts);
    }, []);

    const handleProductClick = (id) => {
        navigate(`/producto/${id}`);
    };

    return (
        <div className={styles.container}>
            <h1>Productos de Bebés</h1>
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
                        <button>AGREGAR AL CARRO</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bebes;

