import React from "react";
import { useCartData } from "../../../contextProviders/cartProvider";
import { InCartItemType } from "../../../types";
import {
  CartImageWrapper,
  CartImage,
  CartItemWrapper,
  CartItemInfoWrapper,
  StyledCartItemName,
  StyledItemRatingAndPrice,
  StyledItemPrice,
  StyledItemAmount,
  DeleteItemButtom,
  DeleteItemIcon,
  StyledTitleAndDeleteWrapper,
  StyledAmountWrapper,
  Minus,
  Plus,
  StyledPlusMinusButton,
  StyledCartLink,
} from "./CartItem.styles";
import {
  faTrash,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { scrollToTop } from "../../../scrollFunction";

const CartItem: React.FC<InCartItemType> = (props) => {
  const { cart, setCart, setIsCartOpen } = useCartData();

  const handleDeleteItem: any = (id: number) => {
    const filteredCart: InCartItemType[] = cart.filter(
      (item: InCartItemType) => item.id !== props.id
    );
    setCart(filteredCart);
  };

  const handleIncreaseAmount = (id: number) => {
    let cartCopy: any = [...cart];
    const itemToChange: InCartItemType = cartCopy.find(
      (item: InCartItemType) => item.id === props.id
    );
    itemToChange.inCartAmount += 1;
    setCart(cartCopy);
  };

  const handleDecreaseAmount = (id: number) => {
    let cartCopy: any = [...cart];
    const itemToChange: InCartItemType = cartCopy.find(
      (item: InCartItemType) => item.id === props.id
    );
    itemToChange.inCartAmount -= 1;

    if (itemToChange.inCartAmount === 0) {
      handleDeleteItem(id);
      return;
    }
    setCart(cartCopy);
  };

  return (
    <CartItemWrapper>
      <CartImageWrapper>
        <CartImage src={props.image} />
      </CartImageWrapper>
      <CartItemInfoWrapper>
        <StyledTitleAndDeleteWrapper>
          <StyledCartLink
            onClick={() => {
              setIsCartOpen(false);
              scrollToTop();
            }}
            to={{
              pathname: `/store/${props.id}`,
              state: {
                ...props,
              },
            }}
          >
            <StyledCartItemName>{props.title}</StyledCartItemName>
          </StyledCartLink>
          <DeleteItemButtom onClick={() => handleDeleteItem(props.id)}>
            <DeleteItemIcon icon={faTrash} color="black" size="2x" />
          </DeleteItemButtom>
        </StyledTitleAndDeleteWrapper>
        <StyledItemRatingAndPrice>
          <StyledItemPrice>{`$${props.price}`}</StyledItemPrice>
          <StyledAmountWrapper>
            <StyledPlusMinusButton>
              <Minus
                icon={faMinusCircle}
                color="black"
                size="lg"
                onClick={() => handleDecreaseAmount(props.id)}
              />
            </StyledPlusMinusButton>
            <StyledItemAmount>{props.inCartAmount}</StyledItemAmount>
            <StyledPlusMinusButton>
              <Plus
                onClick={() => handleIncreaseAmount(props.id)}
                icon={faPlusCircle}
                color="black"
                size="lg"
              />
            </StyledPlusMinusButton>
          </StyledAmountWrapper>
        </StyledItemRatingAndPrice>
      </CartItemInfoWrapper>
    </CartItemWrapper>
  );
};

export default CartItem;
