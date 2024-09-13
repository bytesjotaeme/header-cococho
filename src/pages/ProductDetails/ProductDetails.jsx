import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './ProductDetails.module.css';
import config from '../../utils/config';
import TallesModal from '../../components/common/TallesModal';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Usamos el contexto del carrito
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(''); // Estado para el talle seleccionado
  const backServerUrl = config.backServerUrl;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${backServerUrl}admin/products/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        console.log(data.talle );
        setSelectedSize(data.talle && data.talle.length > 0 ? data.talle[0] : ''); // Inicializar el talle seleccionado con el primer talle disponible
      } catch (error) {
        setError(error.message);
        console.error('Error al traer el detalle de producto: ', error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.nombre,
      price: product.precio,
      promotion: product.promocion,
      image: product.imagenes,
      size: selectedSize, // Utilizamos el talle seleccionado
      quantity: quantity,
    });
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity(""); // Permitir que el input quede vacío temporalmente
    } else {
      setQuantity(Math.max(Number(value), 1)); // Asegurar que sea al menos 1
    }
  };

  const handleShowModal = ()=>{
    setShowModal(true);
  } 

  /* const handleBlur = () => {
    if (quantity === "") {
      setQuantity(1); // Si el input está vacío al perder el foco, setear a 1
    }
  }; */

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.detail}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={product.imagenes} alt={product.nombre} />
        </div>
        <div className={styles.detailsContainer}>
          <h1>{product.nombre}</h1>
          <p className={styles.precios}>
            ${product.precio.toFixed(2)} <span>${product.promocion.toFixed(2)}</span>
          </p>
          <div className={styles.containertallecant}>
            <div className={styles.talle}>
              <label htmlFor="size-select">Talle</label>
              {/* Verificar que los talles existan antes de intentar renderizarlos */}
              <select
                id="size-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className={styles.selectdetail}
              >
                {product.talle && product.talle.map((talle, index) => (
                  <option key={index} value={talle}>
                    {talle}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.purchaseInfo}>
              <label htmlFor="size-select">Cantidad</label>
              <select value={quantity} className={styles.selectdetail} onChange={handleQuantityChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                {/* Agrega más categorías según sea necesario */}
              </select>
            </div>
          </div>
          <a className={styles.guiatalles} onClick={handleShowModal}>Guía de talles</a>
          <TallesModal show={showModal} handleClose={() => setShowModal(false)}/>
          <p className={styles.descripcion}>{product.descripcion}</p>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
