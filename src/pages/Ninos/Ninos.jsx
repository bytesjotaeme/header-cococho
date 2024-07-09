import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Ninos.module.css';

const Ninos = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulación de llamada a una API para obtener productos
        const fetchedProducts = [
            { id: 7, name: 'Camiseta Niño', price: 12.00, discountPrice: 10.00, img: '/src/assets/images/image7.jpg' },
            { id: 8, name: 'Pantalones Niño', price: 15.00, discountPrice: 12.00, img: '/src/assets/images/image8.jpg' },
            { id: 9, name: 'Zapatos Niño', price: 22.00, discountPrice: 19.00, img: '/src/assets/images/image9.jpg' },
            { id: 10, name: 'Chamarra Niño', price: 35.00, discountPrice: 28.00, img: '/src/assets/images/image10.jpg' },
            { id: 11, name: 'Gorra Niño', price: 10.00, discountPrice: 8.00, img: '/src/assets/images/image11.jpg' },
            { id: 12, name: 'Mochila Niño', price: 20.00, discountPrice: 18.00, img: '/src/assets/images/image12.jpg' },
        ];
        setProducts(fetchedProducts);
    }, []);

    const handleProductClick = (id) => {
        navigate(`/producto/${id}`);
    };

    return (
        <div className={styles.container}>
            <h1>Productos de Niños</h1>
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

export default Ninos;
