import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { ItemType } from "../../../types";
import { useItemsData } from "../../../contextProviders/itemsProvider";
import {
  CarouselItemWrapper,
  CarouselItemTitle,
  CarouselImage,
  CarouselItemPrice,
  StyledCarouselLink,
} from "./RecommendedItems.styles";
import { useCartData } from "../../../contextProviders/cartProvider";
import { scrollToTop } from "../../../scrollFunction";

const RecomendedItems: React.FC<ItemType> = (props) => {
  const { setIsCartOpen } = useCartData();
  const items: ItemType[] | any = useItemsData();

  const categoryItems: ItemType[] = items.filter(
    (item: ItemType) => item.category === props.category && item.id !== props.id
  );

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      breakpoints={{
        300: {
          width: 300,
          slidesPerView: 1,
        },
        520: {
          width: 520,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
    >
      {categoryItems.map((item: ItemType) => (
        <SwiperSlide>
          <StyledCarouselLink
            onClick={() => {
              setIsCartOpen(false);
              scrollToTop();
            }}
            to={{
              pathname: `/store/${item.id}`,
              state: {
                ...item,
              },
            }}
          >
            <CarouselItemWrapper>
              <CarouselImage src={item.image} />
              <CarouselItemTitle>{item.title}</CarouselItemTitle>
              <CarouselItemPrice>{`$${item.price}`}</CarouselItemPrice>
            </CarouselItemWrapper>
          </StyledCarouselLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecomendedItems;
