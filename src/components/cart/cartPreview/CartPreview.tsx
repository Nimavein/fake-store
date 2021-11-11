import React from "react";
import {
  CartPreviewContent,
  CartPreviewWrapper,
  GoToCartButton,
} from "./CartPreview.styles";
import { CartPreviewProps } from "../../../types";

const CartPreview: React.FC<CartPreviewProps> = (props) => {
  console.log(props.isCartOpen);

  return (
    <CartPreviewWrapper isCartOpen={props.isCartOpen}>
      <CartPreviewContent isCartOpen={props.isCartOpen}>
        <GoToCartButton>Go to cart</GoToCartButton>
      </CartPreviewContent>
    </CartPreviewWrapper>
  );
};

export default CartPreview;
