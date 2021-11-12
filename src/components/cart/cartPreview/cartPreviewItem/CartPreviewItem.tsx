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
} from "./CartPreviewItem.styles";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPreviewItem: React.FC<InCartItemType> = (props) => {
  const { cart, setCart } = useCartData();

  const handleDeleteItem: any = (id: number) => {
    const filteredCart: InCartItemType[] = cart.filter(
      (item: InCartItemType) => item.id !== props.id
    );
    setCart(filteredCart);
  };

  return (
    <CartPreviewItemWrapper>
      <CartPreviewImageWrapper>
        <CartPreviewImage src={props.image} />
      </CartPreviewImageWrapper>
      <CartItemInfo>
        <TitleAndDeleteWrapper>
          <CartItemName>{props.title}</CartItemName>
          <DeleteItemButtom onClick={() => handleDeleteItem(props.id)}>
            <DeleteItemIcon icon={faTrash} color="black" size="2x" />
          </DeleteItemButtom>
        </TitleAndDeleteWrapper>
        <ItemRatingAndPrice>
          <ItemPrice>{`$${props.price}`}</ItemPrice>
          <ItemAmount>{props.inCartAmount}</ItemAmount>
        </ItemRatingAndPrice>
      </CartItemInfo>
    </CartPreviewItemWrapper>
  );
};

export default CartPreviewItem;
