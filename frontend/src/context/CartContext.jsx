import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "CART_CHANGE":
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

    const cartChange = (item) => {
        dispatch({ type: "CART_CHANGE", payload: item });
    };

    return (
        <CartContext.Provider value={{ cartState, cartChange }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export { CartProvider, useCart };
