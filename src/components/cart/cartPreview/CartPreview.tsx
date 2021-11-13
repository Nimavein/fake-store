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
import { InCartItemType } from "../../../types";
import { useCartData } from "../../../contextProviders/cartProvider";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import CartPreviewItem from "./cartPreviewItem/CartPreviewItem";
import { scrollToTop } from "../../../scrollFunction";

const CartPreview: React.FC = () => {
  const { cart, isCartOpen, handleCart } = useCartData();

  const cartTotalValue: number = cart.reduce(
    (acc: any, obj: any) => acc + obj.inCartAmount * obj.price,
    0
  );

  return (
    <CartPreviewWrapper isCartOpen={isCartOpen}>
      <CartPreviewContent>
        <TotalValueWrapper>
          <TotalValueText>Total Cart Value</TotalValueText>
          <TotalValue>{`$${cartTotalValue.toFixed(2)}`}</TotalValue>
        </TotalValueWrapper>
        {cart.length > 0 ? (
          <LinkToCart to="/cart" onClick={scrollToTop}>
            <GoToCartButton onClick={handleCart}>Go to cart</GoToCartButton>
          </LinkToCart>
        ) : (
          <LinkToCart to="/store" onClick={scrollToTop}>
            <GoToCartButton onClick={handleCart}>
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
