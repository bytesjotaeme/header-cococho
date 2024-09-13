import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import config from '../../utils/config';
import '../../css/Admin/EditCarrusel.css';


const EditCarouselImages = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${backServerUrl}admin/images`);
        setImages(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [backServerUrl]);

  const handleImageChange = (index) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedSelectedImages = [...selectedImages];
      updatedSelectedImages[index] = file;
      setSelectedImages(updatedSelectedImages);
    }
  };

  const handleSubmit = (index) => async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedImages[index]);

    try {
      await axios.put(`${backServerUrl}admin/images/${images[index]._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Imagen actualizada con éxito');
    } catch (error) {
      console.error('Error actualizando la imagen:', error);
    }
  };

  const handleDelete = (index) => async () => {
    try {
      await axios.delete(`${backServerUrl}admin/images/${images[index]._id}`);
      alert('Imagen eliminada con éxito');
      setImages(images.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error eliminando la imagen:', error);
    }
  };

  return (
    <div className='container-edit-carrusel'>
        <h2 className='title-edit-carrusel'>Editar Carrusel</h2>
        <hr id="hr-carrusel"/>
      {images.map((image, index) => (
        <div key={index} className="edit-carousel-image">
          <h4>Imágen actual {index+1}</h4>
          <img src={image.url} alt={`Imagen ${index + 1}`} className="current-image" />
          <Form className='form-carrusel-image' onSubmit={handleSubmit(index)}>
            <Form.Group controlId={`formImage${index}`}>
              <Form.Label>Seleccionar nueva imagen</Form.Label>
              <Form.Control
                type="file"
                name={`image${index}`}
                onChange={handleImageChange(index)}
                accept="image/*"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Actualizar Imagen
            </Button>
            <Button variant="danger" type="button" onClick={handleDelete(index)} className="ml-2">
              Eliminar Imagen
            </Button>
          </Form>
        </div>
      ))}
    </div>
  );
};

export default EditCarouselImages;
