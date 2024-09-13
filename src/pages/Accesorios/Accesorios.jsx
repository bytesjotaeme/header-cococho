import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../../utils/config';
import styles from './Accesorios.module.css';

const ProductsByCategory = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams(); // Obtener la categoría desde la URL
  const backServerUrl = config.backServerUrl;
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`${backServerUrl}admin/products/`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok){
            if(response.status === 401){
                setError("Acceso no autorizado. Por favor verifica tu token.")
            }else{
                setError("Network response was not ok");
            }
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError(error.message)
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    const filtrarProductos = () => {
      if (category) {
        const productosFiltradosPorCategoria = productos.filter(producto =>
          producto.categoria.toLowerCase() === category.toLowerCase()
        );
        setProductosFiltrados(productosFiltradosPorCategoria);
      } else {
        setProductosFiltrados(productos);
      }
    };

    filtrarProductos();
  }, [category, productos]); // Volver a filtrar cada vez que cambie la categoría o los productos

  const handleProductClick = (id) => {
    navigate(`/producto/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>{category ? `Categoría: ${category}` : 'Todos los Productos'}</h1>
      <div className={styles.productList}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(product => (
            <div key={product._id} className={styles.productCard}>
              <img src={product.imagenes} alt={product.nombre} />
              <h2>{product.nombre}</h2>
              <p>${product.precio.toFixed(2)} <span>${product.promocion.toFixed(2)}</span></p>
              <button onClick={() => handleProductClick(product._id)}>Detalle de Producto</button>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsByCategory;
