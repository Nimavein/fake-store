import React from "react";
import { CartWrapper } from "./Cart.styles";
import { useCartData } from "../../contextProviders/cartProvider";

const Cart: React.FC = () => {
  const { cart, setCart } = useCartData();
  console.log(cart);

  return <CartWrapper></CartWrapper>;
};

export default Cart;
