import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import config from "../../utils/config";
import { useEffect, useState } from "react";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    nombre: '',
    stock: '',
    precio: '',
    promocion: '',
    talle: '',
    categoria: '',
    descripcion: '',
    imagenes: null
  });
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    const fetchProductsDetails = async () => {
      try {
        const response = await fetch(`${backServerUrl}admin/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setEditedProduct({
          nombre: data.nombre || '',
          stock: data.stock || '',
          precio: data.precio || '',
          promocion: data.promocion || '',
          talle: data.talle || '',
          categoria: data.categoria || '',
          descripcion: data.descripcion || '',
          imagenes: null
        });
      } catch (error) {
        setError(error.message);
        console.error('Error al traer detalles de productos: ', error);
      }
    };

    fetchProductsDetails();
  }, [id, backServerUrl]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nombre", editedProduct.nombre);
      formData.append("stock", editedProduct.stock);
      formData.append("precio", editedProduct.precio);
      formData.append("promocion", editedProduct.promocion);
      formData.append("talle", editedProduct.talle);
      formData.append("categoria", editedProduct.categoria);
      formData.append("descripcion", editedProduct.descripcion);
      if (editedProduct.imagenes) {
        formData.append("imagenes", editedProduct.imagenes);
      }
  
      console.log("Datos del formulario antes de enviar:");
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
  
      const response = await fetch(`${backServerUrl}admin/products/update/${id}`, {
        method: "PATCH",
        body: formData,
      });
  
      console.log("Estado de la respuesta:", response.status);
  
      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`Network response was not ok: ${errorResponse}`);
      }
  
      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);
      console.log("Poducto editado correctamente");
      navigate('/admin/products');
    } catch (error) {
      console.error("Error actualizando producto:", error);
      setError(error.message);
    }
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditedProduct({
        ...editedProduct,
        imagenes: file,
      });
    }
  };
  

  const handleDelete = async () => {
    try {
      const response = await fetch(`${backServerUrl}admin/products/delete/${id}`, {
        method: "DELETE",
      });
  
      console.log("Estado de la respuesta:", response.status);
  
      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`Network response was not ok: ${errorResponse}`);
      }
  
      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);
  
      navigate('/admin/products');
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      setError(error.message);
    }
  };
  

  if (error) {
    return <p className="text-danger mt-3">Error: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={editedProduct.nombre}
                onChange={handleInputChange}
                placeholder="Ingrese el nombre del producto"
                required
              />
            </Form.Group>
            <Form.Group controlId="formStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={editedProduct.stock}
                onChange={handleInputChange}
                placeholder="Ingrese el stock"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={editedProduct.precio}
                onChange={handleInputChange}
                placeholder="Ingrese el precio del producto"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPromotion">
              <Form.Label>Promoción</Form.Label>
              <Form.Control
                type ="number"
                name="promocion"
                value={editedProduct.promocion}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type = "text"
                name="categoria"
                value={editedProduct.categoria}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                value={editedProduct.descripcion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                name="imagenes"
                onChange={handleImageChange}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Actualizar Producto
            </Button>
            <Button variant="danger" type="button" onClick={handleDelete} className="ml-2">
              Eliminar Producto
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">Error: {error}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductEdit;
