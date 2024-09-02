import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  // Importa useLocation
import config from '../../utils/config';
import styles from './Accesorios.module.css';

const ProductsByCategory = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('accesorios'); // Asegura que accesorios sea el valor por defecto
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;
  const navigate = useNavigate();
  const location = useLocation();  // Obtén la ubicación actual

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`${backServerUrl}admin/products/`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          if (response.status === 401) {
            setError("Acceso no autorizado. Por favor verifica tu token.");
          } else {
            setError("Network response was not ok");
          }
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError(error.message);
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    const filtrarProductos = () => {
      if (categoriaSeleccionada === '') {
        setProductosFiltrados(productos);
      } else {
        const productosFiltradosPorCategoria = productos.filter(producto =>
          producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );
        setProductosFiltrados(productosFiltradosPorCategoria);
      }
    };

    filtrarProductos();
  }, [categoriaSeleccionada, productos]);

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if (path === 'accesorios') {
      setCategoriaSeleccionada('accesorios');
    }
  }, [location.pathname]);  // Ejecutar cuando cambie la ruta

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
    navigate(`/${event.target.value.toLowerCase()}`);
  };

  const handleProductClick = (id) => {
    navigate(`/producto/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Accesorios</h1>
        <p>Descubrí nuestra amplia gama de accesorios para todas las edades. Encuentra desde mochilas y gorros hasta joyería y bufandas, ¡todo con descuentos increíbles!</p>
      </div>
      <select onChange={handleCategoriaChange} className={styles.dropdown} value={categoriaSeleccionada}>
        <option value="bebes">Bebés</option>
        <option value="ninas">Niñas</option>
        <option value="ninos">Niños</option>
        <option value="accesorios">Accesorios</option>
        <option value="juguetes">Juguetes</option>
      </select>
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
