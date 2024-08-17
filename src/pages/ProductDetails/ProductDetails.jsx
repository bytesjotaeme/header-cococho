import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useCart(); // Usamos el contexto del carrito
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/admin/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
                console.error('Error al traer el detalle de producto: ', error);
            }
        };
        fetchProductDetails();
    }, [productId]);

    const handleAddToCart = () => {
        // Asegúrate de enviar al carrito el producto con toda la información necesaria
        addToCart({
            id: product._id,
            name: product.nombre,
            price: product.precio,
            promotion: product.promocion,
            image: product.imagenes,
            size: product.size, // Asegúrate de tener este campo o adaptarlo según tu modelo
            quantity: quantity,
        });
    };

    if (error) {
        return <p>Error: {error}</p>;
    }
    if (!product) {
        return <div>Cargando...</div>;
    }

    // Lógica para el manejo de la cantidad
    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setQuantity(""); // Permitir que el input quede vacío temporalmente
        } else {
            setQuantity(Math.max(Number(value), 1)); // Asegurar que sea al menos 1
        }
    };

    const handleBlur = () => {
        if (quantity === "") {
            setQuantity(1); // Si el input está vacío al perder el foco, setear a 1
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.imagenes} alt={product.nombre} />
            </div>
            <div className={styles.detailsContainer}>
                <h1>{product.nombre}</h1>
                <p>${product.precio.toFixed(2)} <span>${product.promocion.toFixed(2)}</span></p>
                <p>{product.description}</p>
                <div className={styles.purchaseInfo}>
                    <label>
                        Cantidad:
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            onBlur={handleBlur}
                        />
                    </label>
                </div>
                <button className={styles.addToCartButton} onClick={handleAddToCart}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
