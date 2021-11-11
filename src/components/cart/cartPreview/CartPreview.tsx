import React from "react";
import {
  CartPreviewContent,
  CartPreviewIcon,
  CartPreviewItem,
  CartPreviewWrapper,
  EmptyCartPreview,
  EmptyCartPreviewText,
  GoToCartButton,
} from "./CartPreview.styles";
import { CartPreviewProps } from "../../../types";
import { useCartData } from "../../../contextProviders/cartProvider";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const CartPreview: React.FC<CartPreviewProps> = (props) => {
  const { cart, setCart } = useCartData();
  console.log(cart);

  return (
    <CartPreviewWrapper isCartOpen={props.isCartOpen}>
      <CartPreviewContent>
        {cart.length > 0 ? (
          <CartPreviewItem></CartPreviewItem>
        ) : (
          <EmptyCartPreview>
            <CartPreviewIcon icon={faShoppingBag} color="white" size="6x" />
            <EmptyCartPreviewText>
              Your cart is still empty
            </EmptyCartPreviewText>
          </EmptyCartPreview>
        )}
        <GoToCartButton>Go to cart</GoToCartButton>
      </CartPreviewContent>
    </CartPreviewWrapper>
  );
};

export default CartPreview;
