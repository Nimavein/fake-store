import React from "react";
import {
  AddToCartButton,
  ItemCardContent,
  ItemImage,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
} from "./Item.styles";
import { ItemType } from "../../../types";

const Item: React.FC<ItemType> = (props) => {
  const { title, image, price } = props;
  return (
    <ItemWrapper>
      <ItemImage src={image} />
      <ItemCardContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice>{`$${price}`}</ItemPrice>
        <AddToCartButton>Add to cart</AddToCartButton>
      </ItemCardContent>
    </ItemWrapper>
  );
};

export default Item;
