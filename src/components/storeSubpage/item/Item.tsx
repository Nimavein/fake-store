import React from "react";
import { ItemImage, ItemWrapper } from "./Item.styles";
import { ItemType } from "../../../types";

const Item: React.FC<ItemType> = (props) => {
  const { title, image } = props;
  return (
    <ItemWrapper>
      <ItemImage src={image} />
      {title}
    </ItemWrapper>
  );
};

export default Item;
