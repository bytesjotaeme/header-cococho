import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Form, Image, Pagination } from "react-bootstrap";
import config from '../../utils/config';
import '../../css/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const backServerUrl = config.backServerUrl;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${backServerUrl}admin/products`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        setError("Unauthorized access. Please check your token.");
                    } else {
                        setError("Network response was not ok");
                    }
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
                console.error("Error al traer productos: ", error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredProducts = products.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
            <Container className="container-productlist">
                <Link to="/admin/products/add">
                    <Button variant="success">Agregar Producto</Button>
                </Link>
                <h1 className="h1-productlist">Listado Productos</h1>
                <div className="product-card-header">
                    <Form.Control
                        type="text"
                        placeholder="Buscar producto por nombre"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="mb-3"
                    />
                </div>
                <Table striped bordered hover responsive className="table-productlist">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Promoción</th>
                            <th>Talle</th>
                            <th>Categoría</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((product) => (
                            <tr key={product._id}>
                                <td>
                                    {product.imagenes.length > 0 && (
                                        <Image
                                            src={product.imagenes[0]}
                                            alt={product.nombre}
                                            fluid
                                        />
                                    )}
                                </td>
                                <td>{product.nombre}</td>
                                <td>{product.stock}</td>
                                <td>{product.precio}</td>
                                <td>{product.promocion}</td>
                                <td>{product.talle}</td>
                                <td>{product.categoria}</td>
                                <td>
                                    <Link to={`/admin/products/update/${product._id}`}>
                                        <Button variant="primary" className="btn-primary-productlist">Ver Detalles</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Pagination>
                    {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </Container>
    );
};

export default ProductList;
