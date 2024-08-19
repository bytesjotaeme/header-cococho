import { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';

const CarouselSection = ({ type, title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/admin/products/carousel/${type}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [type]);

  return (
    <div>
      <h2>{title}</h2>
      <ProductCarousel products={products} />
    </div>
  );
};

export default CarouselSection;
