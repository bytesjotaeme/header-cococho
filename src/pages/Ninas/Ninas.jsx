import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Ninas.module.css';

const Ninas = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('ninas');
    const navigate = useNavigate();

    useEffect(() => {
        // Simulación de llamada a una API para obtener productos
        const fetchedProducts = [
            { id: 13, name: 'Vestido Niña', price: 20.00, discountPrice: 15.00, img: '/src/assets/images/image13.jpg' },
            { id: 14, name: 'Falda Niña', price: 18.00, discountPrice: 14.00, img: '/src/assets/images/image14.jpg' },
            { id: 15, name: 'Blusa Niña', price: 22.00, discountPrice: 19.00, img: '/src/assets/images/image15.jpg' },
            { id: 16, name: 'Leggings Niña', price: 12.00, discountPrice: 10.00, img: '/src/assets/images/image16.jpg' },
            { id: 17, name: 'Zapatos Niña', price: 25.00, discountPrice: 20.00, img: '/src/assets/images/image17.jpg' },
            { id: 18, name: 'Suéter Niña', price: 30.00, discountPrice: 25.00, img: '/src/assets/images/image18.jpg' },
        ];
        setProducts(fetchedProducts);
    }, []);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        navigate(`/${category}`);
    };

    return (
        <div className={styles.container}>
            {/* Sección Descriptiva */}
            <div className={styles.intro}>
                <h1>Productos de Niñas</h1>
                <p>Descubrí toda la variedad de ropa para niñas: desde vestidos elegantes hasta ropa casual, perfecta para cada ocasión. Aprovechá nuestras ofertas exclusivas con hasta 50% de descuento.</p>
            </div>

            {/* Dropdown para cambiar de categoría */}
            <select value={selectedCategory} onChange={handleCategoryChange} className={styles.dropdown}>
                <option value="bebes">Bebés</option>
                <option value="ninas">Niñas</option>
                <option value="ninos">Niños</option>
                <option value="accesorios">Accesorios</option>
                <option value="juguetes">Juguetes</option>
            </select>

            {/* Lista de Productos */}
            <div className={styles.productList}>
                {products.map(product => (
                    <div key={product.id} className={styles.productCard} onClick={() => navigate(`/producto/${product.id}`)}>
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

export default Ninas;
