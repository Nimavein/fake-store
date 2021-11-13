import styled from "styled-components";
import { HomepageGoToCartButton } from "../homepage/Homepage.styles";
import {
  CartPreviewIcon,
  EmptyCartPreview,
  EmptyCartPreviewText,
  LinkToCart,
} from "./cartPreview/CartPreview.styles";
import { getColor } from "../../styles/utils";
import { PriceDivider } from "../itemPage/ItemPage.styles";

export const CartWrapper = styled.section`
  display: flex;
  max-width: 1320px;
  padding: 70px 24px 36px 24px;
  margin: 24px auto 0 auto;
  gap: 24px;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 54px 24px 24px 24px;
    flex-direction: column;
  }
`;

export const LeftSection = styled.div<{ isCartEmpty: boolean }>`
  flex-direction: column;
  width: ${(props) => (props.isCartEmpty ? "100%" : "50%")};
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;
export const RightSection = styled(LeftSection)`
   display: ${(props) => (props.isCartEmpty ? "none" : "flex")};

  }
`;

export const EmptyCartWrapper = styled(EmptyCartPreview)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 179px 0;
`;
export const CartIcon = styled(CartPreviewIcon)`
  margin-bottom: 42px;
`;
export const EmptyCart = styled(EmptyCartPreview)``;
export const EmptyCartText = styled(EmptyCartPreviewText)`
  font-weight: 600;
  font-size: 22px;
`;

export const CTAButton = styled(HomepageGoToCartButton)`
  width: 300px;
  margin-top: 24px;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    background-color: ${getColor("orange")};
  }
`;

export const BrowseProductsLink = styled(LinkToCart)``;

export const ItemsAddedText = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Divider = styled(PriceDivider)`
  margin: 12px 0;
`;

export const OrderTotal = styled.p`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 600;
  text-align: end;
`;

export const FormText = styled(ItemsAddedText)``;
