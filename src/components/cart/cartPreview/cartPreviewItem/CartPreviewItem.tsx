import React from "react";
import { useCartData } from "../../../../contextProviders/cartProvider";
import { InCartItemType } from "../../../../types";
import {
  CartPreviewImageWrapper,
  CartPreviewImage,
  CartPreviewItemWrapper,
  CartItemInfo,
  CartItemName,
  ItemRatingAndPrice,
  ItemPrice,
  ItemAmount,
  DeleteItemButtom,
  DeleteItemIcon,
  TitleAndDeleteWrapper,
  AmountWrapper,
  Minus,
  Plus,
  PlusMinusButton,
} from "./CartPreviewItem.styles";
import {
  faTrash,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { StyledCartLink } from "../../cartItem/CartItem.styles";
const CartPreviewItem: React.FC<InCartItemType> = (props) => {
  const { cart, setCart } = useCartData();

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
    <CartPreviewItemWrapper>
      <CartPreviewImageWrapper>
        <CartPreviewImage src={props.image} />
      </CartPreviewImageWrapper>
      <CartItemInfo>
        <TitleAndDeleteWrapper>
          <StyledCartLink
            to={{
              pathname: `/store/${props.id}`,
              state: {
                ...props,
              },
            }}
          >
            <CartItemName>{props.title}</CartItemName>
          </StyledCartLink>
          <DeleteItemButtom onClick={() => handleDeleteItem(props.id)}>
            <DeleteItemIcon icon={faTrash} color="black" size="2x" />
          </DeleteItemButtom>
        </TitleAndDeleteWrapper>
        <ItemRatingAndPrice>
          <ItemPrice>{`$${props.price}`}</ItemPrice>
          <AmountWrapper>
            <PlusMinusButton>
              <Minus
                icon={faMinusCircle}
                color="black"
                size="lg"
                onClick={() => handleDecreaseAmount(props.id)}
              />
            </PlusMinusButton>
            <ItemAmount>{props.inCartAmount}</ItemAmount>
            <PlusMinusButton>
              <Plus
                onClick={() => handleIncreaseAmount(props.id)}
                icon={faPlusCircle}
                color="black"
                size="lg"
              />
            </PlusMinusButton>
          </AmountWrapper>
        </ItemRatingAndPrice>
      </CartItemInfo>
    </CartPreviewItemWrapper>
  );
};

export default CartPreviewItem;
