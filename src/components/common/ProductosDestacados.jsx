import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import styles from './ProductosDestacados.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from '../../utils/config';

const ProductosDestacados = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const navigate = useNavigate();
    const backServerUrl = config.backServerUrl;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${backServerUrl}admin/products/carousel/featured`);
                const data = await response.json();
                setFeaturedProducts(data.slice(0, 10)); // Obtener los primeros 10 productos para el slider
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const settings = {
        dots: true,
        infinite: featuredProducts.length > 1, //evita la repetición de elementos
        speed: 500,
        slidesToShow: Math.min(4, featuredProducts.length),
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
                        key={product._id} 
                        className={styles.productCard}
                    >
                        <img src={product.imagenes[0]} alt={product.nombre} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.nombre}</h2>
                        <p className={styles.productPrice}><span>${product.precio.toFixed(2)}</span> ${product.promocion.toFixed(2)}</p>
                        <button className={styles.viewProductButton} onClick={() => handleProductClick(product._id)}>VER PRODUCTO</button>
                        {/* <button className={styles.addButton}>AGREGAR AL CARRO</button> */}
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
