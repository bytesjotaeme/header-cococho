import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../utils/config';
import styles from './Bebes.module.css';


const ProductsByCategory = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(''); // Estado para manejar la categoría seleccionada
  const [productosFiltrados, setProductosFiltrados] = useState([]); // Estado para manejar los productos filtrados
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;
  const navigate = useNavigate();
  
  useEffect(() => {
    // Función para obtener los productos desde la API
    const fetchProductos = async () => {
      try {
        const response = await fetch(`${backServerUrl}admin/products/`,{
            method: 'GET',
                    headers:{
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
    // Función para filtrar los productos cuando cambia la categoría seleccionada
    const filtrarProductos = () => {
      if (categoriaSeleccionada === '') {
        setProductosFiltrados(productos); // Mostrar todos los productos si no hay categoría seleccionada
      } else {
        const productosFiltradosPorCategoria = productos.filter(producto =>
          producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );
        setProductosFiltrados(productosFiltradosPorCategoria);
      }
    };

    filtrarProductos();
  }, [categoriaSeleccionada, productos]); // Volver a filtrar cada vez que cambie la categoría o los productos

  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };
  
  const handleProductClick = (id) => {
    navigate(`/producto/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>¡Conoce nuestros productos!</h1>
      <select onChange={handleCategoriaChange} className={styles.dropdown} value={categoriaSeleccionada}>
        <option value="">Todas las Categorías</option>
        <option value="Bebé">Bebé</option>
        <option value="Beba">Beba</option>
        <option value="Mujer">Mujer</option>
        <option value="Hombre">Hombre</option>
        <option value="Indumentaria">Indumentaria</option>
        <option value="rodados">Rodados</option>
        {/* Agrega más categorías según sea necesario */}
      </select>

      <div className={styles.productList}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(product => (
            <div key={product._id} className={styles.productCard} /* onClick={() => handleProductClick(product._id)} */>
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
