import React from "react";
import {
  BrowseProductsLink,
  CartIcon,
  CartWrapper,
  CTAButton,
  Divider,
  EmptyCartText,
  EmptyCartWrapper,
  FormText,
  ItemsAddedText,
  LeftSection,
  OrderTotal,
  RightSection,
} from "./Cart.styles";
import { useCartData } from "../../contextProviders/cartProvider";
import { InCartItemType } from "../../types";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./cartItem/CartItem";
import CartForm from "./cartForm/CartForm";
import { parse } from "path";

const Cart: React.FC = () => {
  const { cart } = useCartData();

  const cartTotalValue: number = cart.reduce(
    (acc: any, obj: any) => acc + obj.inCartAmount * obj.price,
    0
  );

  return (
    <CartWrapper>
      <LeftSection isCartEmpty={cart.length === 0}>
        {cart.length > 0 && (
          <>
            <ItemsAddedText>Items in your cart</ItemsAddedText>
            <Divider />
          </>
        )}

        {cart.length > 0 ? (
          cart.map((item: InCartItemType) => {
            return <CartItem key={item.id} {...item} />;
          })
        ) : (
          <EmptyCartWrapper>
            <CartIcon icon={faShoppingBag} color="black" size="10x" />
            <EmptyCartText>Your cart is still empty</EmptyCartText>
            <BrowseProductsLink to="/store">
              <CTAButton>Browse Products</CTAButton>
            </BrowseProductsLink>
          </EmptyCartWrapper>
        )}

        {cart.length > 0 && (
          <>
            <Divider />
            <OrderTotal>{`Total: $${cartTotalValue}`}</OrderTotal>
          </>
        )}
      </LeftSection>
      <RightSection isCartEmpty={cart.length === 0}>
        <FormText>Submit your order</FormText>
        <Divider />
        <CartForm cartTotal={parseInt(cartTotalValue.toFixed(2))} />
      </RightSection>
    </CartWrapper>
  );
};

export default Cart;
