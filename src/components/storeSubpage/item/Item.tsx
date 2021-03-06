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
  StyledItemLink,
} from "./Item.styles";
import { ItemType, InCartItemType } from "../../../types";
import StarRatings from "react-star-ratings";
import { useCartData } from "../../../contextProviders/cartProvider";
import { scrollToTop } from "../../../scrollFunction";

const Item: React.FC<ItemType> = (props) => {
  const { title, image, price, rating, id } = props;
  const { cart, setCart } = useCartData();

  const addToCart = () => {
    setCart([...cart, { ...props, inCartAmount: 1 }]);
  };

  const thisItemInCart: boolean = cart.some(
    (item: InCartItemType) => item.id === id
  );

  return (
    <ItemWrapper>
      <StyledItemLink
        onClick={() => scrollToTop()}
        to={{
          pathname: `/store/${id}`,
          state: {
            ...props,
          },
        }}
      >
        <ItemImage src={image} />
      </StyledItemLink>
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

        <AddToCartButton isAlreadyInCart={thisItemInCart} onClick={addToCart}>
          {thisItemInCart ? "Already in cart" : "Add to cart"}
        </AddToCartButton>
      </ItemCardContent>
    </ItemWrapper>
  );
};

export default Item;
