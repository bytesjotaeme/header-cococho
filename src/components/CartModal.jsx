// src/components/CartModal.jsx
import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart';
import './Cart-Modal.css';

const CartModal = ({ isVisible, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  if (!isVisible) return null;

  // Calcular el subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = typeof item.price === 'number' ? item.price : 0;
      const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
      return acc + price * quantity;
    }, 0);
  };

  // Generar el enlace de WhatsApp
  const generateWhatsAppLink = () => {
    const phoneNumber = '+5493865334417';  // Reemplaza con tu número de WhatsApp
    const subtotal = calculateSubtotal();
    const message = encodeURIComponent(
      `Hola, me gustaría ordenar los siguientes productos:\n` +
      `${cartItems.map(item => {
        const price = typeof item.price === 'number' ? item.price.toFixed(2) : '0.00';
        return `${item.name} - Cantidad: ${item.quantity} - Talle: ${item.size} - Precio unitario: $${price}`;
      }).join('\n')}\n` +
      `Total: $${subtotal.toFixed(2)}`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handlePurchase = () => {
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="cart-modal-close" onClick={onClose}>×</button>
        <h2>Carrito de Compras</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Talle: {item.size}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</p>
                  {item.discount && <p>Descuento: -${typeof item.discount === 'number' ? item.discount.toFixed(2) : '0.00'}</p>}
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Tu carrito está vacío</p>
        )}
        <div className="summary">
          <p>Subtotal (sin envío): ${calculateSubtotal().toFixed(2)}</p>
          {/* <p>Total (con envío): ${calculateTotal().toFixed(2)}</p> */}
        </div>
        <button onClick={handlePurchase}>Iniciar Compra por Whatsapp</button>
      </div>
    </div>
  );
};

CartModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CartModal;
