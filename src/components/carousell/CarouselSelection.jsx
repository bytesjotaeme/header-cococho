import { useEffect, useState } from 'react';
import ProductCarousel from './ProductCarousel';
import config from '../../utils/config';

const CarouselSection = ({ type, title }) => {
  const [products, setProducts] = useState([]);
  const backServerUrl = config.backServerUrl;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backServerUrl}/admin/products/carousel/${type}`);
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
