// src/components/CartButton.jsx
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa'; // Usaremos react-icons para el ícono del carrito
import CartModal from './CartModal';
import '../../css/cart/Cart-Button.css';

const CartButton = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { cartItems } = useCart();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <button onClick={toggleModal} className="cart-button">
        <FaShoppingCart size={24} />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>
      <CartModal isVisible={isModalVisible} onClose={toggleModal} />
    </>
  );
};

export default CartButton;
