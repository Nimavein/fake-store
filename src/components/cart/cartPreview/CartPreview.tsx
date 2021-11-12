import React from "react";
import {
  CartPreviewContent,
  CartPreviewIcon,
  CartPreviewWrapper,
  EmptyCartPreview,
  EmptyCartPreviewText,
  GoToCartButton,
  TotalValueWrapper,
  TotalValueText,
  TotalValue,
  LinkToCart,
  Divider,
} from "./CartPreview.styles";
import { CartPreviewProps, InCartItemType } from "../../../types";
import { useCartData } from "../../../contextProviders/cartProvider";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import CartPreviewItem from "./cartPreviewItem/CartPreviewItem";

const CartPreview: React.FC<CartPreviewProps> = (props) => {
  const { cart } = useCartData();

  const cartTotalValue: number = cart.reduce(
    (acc: any, obj: any) => acc + obj.inCartAmount * obj.price,
    0
  );

  console.log(cart);

  return (
    <CartPreviewWrapper isCartOpen={props.isCartOpen}>
      <CartPreviewContent>
        <TotalValueWrapper>
          <TotalValueText>Total Cart Value</TotalValueText>
          <TotalValue>{`$${cartTotalValue}`}</TotalValue>
        </TotalValueWrapper>
        {cart.length > 0 ? (
          <LinkToCart to="/cart">
            <GoToCartButton onClick={() => props.setIsCartOpen(false)}>
              Go to cart
            </GoToCartButton>
          </LinkToCart>
        ) : (
          <LinkToCart to="/store">
            <GoToCartButton onClick={() => props.setIsCartOpen(false)}>
              Browse products
            </GoToCartButton>
          </LinkToCart>
        )}
        <Divider />
        {cart.length > 0 ? (
          cart.map((item: InCartItemType) => {
            return <CartPreviewItem key={item.id} {...item} />;
          })
        ) : (
          <EmptyCartPreview>
            <CartPreviewIcon icon={faShoppingBag} color="white" size="6x" />
            <EmptyCartPreviewText>
              Your cart is still empty
            </EmptyCartPreviewText>
          </EmptyCartPreview>
        )}
      </CartPreviewContent>
    </CartPreviewWrapper>
  );
};

export default CartPreview;
