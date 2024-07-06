import React from 'react';
import { useCart } from '../../contexts/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, total, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

    return (
        <div className={`${styles.cart} ${isCartOpen ? styles.open : ''}`}>
            <div className={styles.overlay} onClick={() => setIsCartOpen(false)}></div>
            <div className={styles.cartContent}>
                <button className={styles.closeButton} onClick={() => setIsCartOpen(false)}>X</button>
                <h2>Carrito</h2>
                {cart.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map(item => (
                                <li key={item.id} className={styles.cartItem}>
                                    <img src={item.img} alt={item.name} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>${item.discountPrice.toFixed(2)}</p>
                                        <div className={styles.quantity}>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.total}>
                            <h3>Total: ${total.toFixed(2)}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
