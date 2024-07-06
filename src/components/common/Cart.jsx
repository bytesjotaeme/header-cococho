import React from 'react';
import { useCart } from '../../contexts/CartContext';
import styles from './Cart.module.css';

// Función para generar el enlace de WhatsApp
const generateWhatsAppLink = (cart) => {
    const phoneNumber = 'YOUR_PHONE_NUMBER';  // Reemplaza con tu número
    const message = encodeURIComponent(
        `Hola, me gustaría ordenar los siguientes productos:\n` +
        `${cart.map(item => `${item.name} - Cantidad: ${item.quantity} - Precio unitario: $${item.discountPrice.toFixed(2)}`).join('\n')}\n` +
        `Total: $${cart.reduce((acc, item) => acc + item.discountPrice * item.quantity, 0).toFixed(2)}`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
};

const Cart = ({ asPage = false }) => {
    const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart } = useCart();

    if (!isCartOpen && !asPage) {
        return null;
    }

    const whatsappLink = cart.length > 0 ? generateWhatsAppLink(cart) : '';

    return (
        <div className={asPage ? styles.cartPage : styles.cartOverlay} onClick={!asPage ? () => toggleCart(false) : undefined}>
            <div className={styles.cart} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => toggleCart(false)}>×</button>
                {cart.length === 0 ? (
                    <p className={styles.emptyCart}>El carrito está vacío.</p>
                ) : (
                    <>
                        {cart.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.img} alt={item.name} className={styles.cartItemImage} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>Precio: ${item.price.toFixed(2)} <span>(${item.discountPrice.toFixed(2)})</span></p>
                                    <div className={styles.quantityControl}>
                                        <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Eliminar</button>
                                </div>
                            </div>
                        ))}
                        <div className={styles.total}>
                            <h3>Total: ${cart.reduce((acc, item) => acc + item.discountPrice * item.quantity, 0).toFixed(2)}</h3>
                            {whatsappLink && <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>Iniciar compra por WhatsApp</a>}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
