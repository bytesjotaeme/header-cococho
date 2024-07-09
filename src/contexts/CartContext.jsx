import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    cart: [],
    isCartOpen: false
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const itemExists = state.cart.find(item => item.id === action.payload.id);
            return {
                ...state,
                cart: itemExists 
                    ? state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                    : [...state.cart, { ...action.payload, quantity: 1 }],
                isCartOpen: true
            };

        case 'REMOVE_ITEM':
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)};

        case 'UPDATE_QUANTITY':
            return {...state, cart: state.cart.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)};

        case 'TOGGLE_CART':
            return {...state, isCartOpen: !state.isCartOpen};

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = product => dispatch({ type: 'ADD_ITEM', payload: product });
    const removeFromCart = id => dispatch({ type: 'REMOVE_ITEM', payload: id });
    const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart, updateQuantity, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
