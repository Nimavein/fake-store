import styled from "styled-components";
import { getColor } from "../../styles/utils";
import { AddToCartButton } from "../storeSubpage/item/Item.styles";

export const ItemPageWrapper = styled.section`
  padding: 70px 24px 0 24px;
  max-width: 1200px;
  margin: 0 auto 0 auto;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 54px 24px 0 24px;
  }
`;

export const ItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const ItemImageWrapper = styled.div`
  height: 500px;
  width: 600px;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    height: auto;
  }
`;

export const ItemInfo = styled.div`
  padding: 36px 0;
  display: flex;
  gap: 20px;

  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
  }
`;

export const ItemRightSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;

  @media ${({ theme }) => theme.medias.mobile} {
    max-width: 100%;
  }
`;

export const ItemName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const ItemDescription = styled.p``;
export const ItemPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 18px;
`;
export const ItemCategory = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`;

export const ItemRatingCount = styled.p`
  color: ${getColor("darkGrey")};
  margin-left: 8px;
  font-size: 12px;
`;

export const AddToCart = styled(AddToCartButton)`
  margin-top: 40px;
  z-index: 0;
  @media ${({ theme }) => theme.medias.mobile} {
    margin-top: 32px;
  }
`;

export const PriceDivider = styled.hr`
  border: 1px solid ${getColor("lightGrey")};
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
`;

export const MoreInCategoryText = styled.p`
  margin-top: 32px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
`;
