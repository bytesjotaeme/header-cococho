import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import config from "../../utils/config";

const ProductAdd = () => {
  const [error, setError] = useState(null);
  const backServerUrl = config.backServerUrl;
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    nombre: '',
    stock: '',
    precio: '',
    promocion: '',
    talle: '',
    categoria: '',
    descripcion: '',
    imagenes: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      setNewProduct({
        ...newProduct,
        imagenes: files,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("nombre", newProduct.nombre);
    formData.append("stock", newProduct.stock);
    formData.append("precio", newProduct.precio);
    formData.append("promocion", newProduct.promocion);
    formData.append("talle", newProduct.talle);
    formData.append("categoria", newProduct.categoria);
    formData.append("descripcion", newProduct.descripcion);

    if (newProduct.imagenes) {
      Array.from(newProduct.imagenes).forEach((file, index) => {
        formData.append(`imagenes`, file);
      });
    }

    // Log para verificar los datos en formData
    console.log('Datos del formulario a enviar: ');
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await fetch(`${backServerUrl}admin/products/create`, {
        method: "POST",
        body: formData
      });

      // Log para la respuesta
      console.log('Respuesta del servidor:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error Data:', errorData); // Log para datos de error del servidor
        throw new Error(errorData.message || "Network response was not ok");
      }
      console.log("Producto agregado correctamente");
      navigate("/admin/products");
    } catch (error) {
      console.log("Error al crear producto: ", error);
      setError(error.message);
    }
  };

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
                value={newProduct.nombre}
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
                value={newProduct.stock}
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
                value={newProduct.precio}
                onChange={handleInputChange}
                placeholder="Ingrese el precio del producto"
                required
              />
            </Form.Group>
            <Form.Group controlId="formPromotion">
              <Form.Label>Promoción</Form.Label>
              <Form.Control
                type="number"
                name="promocion"
                value={newProduct.promocion}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTalle">
              <Form.Label>Talle</Form.Label>
              <Form.Control
                type="text"
                name="talle"
                value={newProduct.talle}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type="text"
                name="categoria"
                value={newProduct.categoria}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                value={newProduct.descripcion}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Imágenes</Form.Label>
              <Form.Control
                type="file"
                name="imagenes"
                onChange={handleImageChange}
                accept="image/*"
                multiple
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Agregar Producto
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">Error: {error}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductAdd;
