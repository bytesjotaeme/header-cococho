import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../../data/products';
import styles from './ProductosDestacados.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductosDestacados = () => {
    const featuredProducts = getProductsByCategory('bebes').slice(0, 10); // Obtener los primeros 10 productos para el slider
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <div className="slick-next" />,
        prevArrow: <div className="slick-prev" />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleProductClick = (id) => {
        navigate(`/producto/${id}`);
    };

    const handleViewMoreProducts = () => {
        navigate('/bebes');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Productos Destacados</h1>
            <Slider {...settings}>
                {featuredProducts.map(product => (
                    <div 
                        key={product.id} 
                        className={styles.productCard}
                    >
                        <img src={product.img} alt={product.name} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productPrice}><span>${product.price.toFixed(2)}</span> ${product.discountPrice.toFixed(2)}</p>
                        <button className={styles.viewProductButton} onClick={() => handleProductClick(product.id)}>VER PRODUCTO</button>
                        <button className={styles.addButton}>AGREGAR AL CARRO</button>
                    </div>
                ))}
            </Slider>
            <div className={styles.viewMoreContainer}>
                <button className={styles.viewMoreButton} onClick={handleViewMoreProducts}>VER MÁS PRODUCTOS</button>
            </div>
        </div>
    );
};

export default ProductosDestacados;
