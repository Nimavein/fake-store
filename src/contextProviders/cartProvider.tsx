import React, { useContext, useState } from "react";

const CartContext = React.createContext({});

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, isCartOpen, setIsCartOpen, handleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartData: any = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};
