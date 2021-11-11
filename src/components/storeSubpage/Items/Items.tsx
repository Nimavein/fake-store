import React from "react";
import { useItemsData } from "../../../contextProviders/itemsProvider";
import { ItemType } from "../../../types";
import Item from "../item/Item";
import { ItemsWrapper } from "./Items.styles";

const Items: React.FC = () => {
  const items: ItemType[] | any = useItemsData();
  return (
    <ItemsWrapper>
      {items.map((item: ItemType) => {
        return <Item key={item.id} {...item} />;
      })}
    </ItemsWrapper>
  );
};

export default Items;
