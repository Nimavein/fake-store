import React from "react";
import {
  AddToCartButton,
  ItemCardContent,
  ItemImage,
  ItemPrice,
  ItemRating,
  ItemRatingAndPrice,
  ItemRatingCount,
  ItemTitle,
  ItemWrapper,
} from "./Item.styles";
import { ItemType } from "../../../types";
import StarRatings from "react-star-ratings";

const Item: React.FC<ItemType> = (props) => {
  const { title, image, price, rating } = props;
  return (
    <ItemWrapper>
      <ItemImage src={image} />
      <ItemCardContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemRatingAndPrice>
          <ItemPrice>{`$${price}`}</ItemPrice>
          <ItemRating>
            <StarRatings
              rating={rating.rate}
              starRatedColor="#FFD700"
              starDimension="16px"
              starSpacing="2px"
            />
            <ItemRatingCount>{rating.count}</ItemRatingCount>
          </ItemRating>
        </ItemRatingAndPrice>

        <AddToCartButton>Add to cart</AddToCartButton>
      </ItemCardContent>
    </ItemWrapper>
  );
};

export default Item;
