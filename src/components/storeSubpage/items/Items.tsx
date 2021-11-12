import React from "react";
import { useItemsData } from "../../../contextProviders/itemsProvider";
import { ItemsPropsType, ItemType } from "../../../types";
import Item from "../item/Item";
import { ItemsWrapper } from "./Items.styles";

const Items: React.FC<ItemsPropsType> = (props) => {
  const items: ItemType[] | any = useItemsData();

  const itemsFilteredByCategory: ItemType[] = items.filter(
    (item: ItemType) => item.category === props.category
  );

  return (
    <ItemsWrapper>
      {props.category === "all"
        ? items.map((item: ItemType) => {
            return <Item key={item.id} {...item} />;
          })
        : itemsFilteredByCategory.map((item: ItemType) => {
            return <Item key={item.id} {...item} />;
          })}
    </ItemsWrapper>
  );
};

export default Items;
