import React, { useContext, useState } from "react";

const CartContext = React.createContext({});

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartData: any = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
