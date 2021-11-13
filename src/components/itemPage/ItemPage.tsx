import React from "react";
import { useLocation } from "react-router-dom";
import { ItemLocationType, ItemType } from "../../types";
import {
  ItemCategory,
  ItemDescription,
  ItemImage,
  ItemImageWrapper,
  ItemInfo,
  ItemName,
  ItemPageWrapper,
  ItemRatingCount,
  ItemRightSection,
  ItemRating,
  ItemPrice,
  AddToCart,
  PriceDivider,
  MoreInCategoryText,
} from "./ItemPage.styles";
import StarRatings from "react-star-ratings";
import { useCartData } from "../../contextProviders/cartProvider";
import { InCartItemType } from "../../types";
import RecomendedItems from "./recommendedItems/RecomendedItems";

const ItemPage: React.FC = () => {
  const { cart, setCart } = useCartData();
  const location: ItemLocationType = useLocation();

  const { title, id, image, description, price, rating, category } =
    location.state;

  const locationCopy: ItemType = location.state;
  console.log(locationCopy);

  const addToCart = () => {
    setCart([...cart, { ...locationCopy, inCartAmount: 1 }]);
  };

  const thisItemInCart: boolean = cart.some(
    (item: InCartItemType) => item.id === id
  );

  return (
    <ItemPageWrapper>
      <ItemInfo>
        <ItemImageWrapper>
          <ItemImage src={image} />
        </ItemImageWrapper>
        <ItemRightSection>
          <ItemName>{title}</ItemName>
          <ItemCategory>{category}</ItemCategory>
          <ItemRating>
            <StarRatings
              rating={rating.rate}
              starRatedColor="#FFD700"
              starDimension="16px"
              starSpacing="2px"
            />
            <ItemRatingCount>{rating.count}</ItemRatingCount>
          </ItemRating>
          <ItemPrice>{`$${price}`}</ItemPrice>
          <PriceDivider />
          <ItemDescription>{description}</ItemDescription>
          <AddToCart isAlreadyInCart={thisItemInCart} onClick={addToCart}>
            {thisItemInCart ? "Already in cart" : "Add to cart"}
          </AddToCart>
        </ItemRightSection>
      </ItemInfo>
      <PriceDivider />
      <MoreInCategoryText>More items in category</MoreInCategoryText>
      <RecomendedItems {...locationCopy} />
    </ItemPageWrapper>
  );
};

export default ItemPage;
