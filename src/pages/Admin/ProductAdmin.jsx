// import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductList from '../../components/Admin/ProductList'
import EditCarouselImages from '../../components/common/EditCarouselImages';
import './ProductAdmin.css';

const ProductAdmin = () => {
  const [showMyProducts, setShowMyProducts] = useState(true);
  const toggleProducts = ()=>{
    setShowMyProducts(!showMyProducts);
  };
  return (

    <>
       <Button onClick={toggleProducts} className='button-change'>
        {showMyProducts ? 'Editar Carrusel' : 'Ver mis Productos'}
      </Button>
      {(
        showMyProducts ? <ProductList /> : <EditCarouselImages />
      )}
    </>
    // <ProductList/>
  )
}

export default ProductAdmin