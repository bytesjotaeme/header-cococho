import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { getProductById } from '../../data/products';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchedProduct = getProductById(productId);
        setProduct(fetchedProduct);
    }, [productId]);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.detailsContainer}>
                <h1>{product.name}</h1>
                <p>${product.price.toFixed(2)} <span>${product.discountPrice.toFixed(2)}</span></p>
                <p>{product.description}</p>
                <div className={styles.purchaseInfo}>
                    <label>
                        Cantidad:
                        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                    </label>
                </div>
                <button className={styles.addToCartButton} onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ProductDetails;
