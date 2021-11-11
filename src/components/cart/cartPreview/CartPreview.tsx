import React from "react";
import {
  CartPreviewContent,
  CartPreviewWrapper,
  GoToCartButton,
} from "./CartPreview.styles";
import { CartPreviewProps } from "../../../types";
import { useCartData } from "../../../contextProviders/cartProvider";

const CartPreview: React.FC<CartPreviewProps> = (props) => {
  const { cart, setCart } = useCartData();
  console.log(cart);

  return (
    <CartPreviewWrapper isCartOpen={props.isCartOpen}>
      <CartPreviewContent>
        <GoToCartButton>Go to cart</GoToCartButton>
      </CartPreviewContent>
    </CartPreviewWrapper>
  );
};

export default CartPreview;
