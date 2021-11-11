import styled from "styled-components";
import { getColor } from "../../../styles/utils";

export const ItemWrapper = styled.div`
  break-inside: avoid;
  transform: translateZ(0);
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  margin-bottom: 20px;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

export const ItemCardContent = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.p`
  font-weight: 600;
`;
export const ItemPrice = styled.p`
  font-weight: 600;
`;

export const ItemImage = styled.img`
  max-width: 100%;
  border-radius: 16px 16px 0 0;
`;

export const AddToCartButton = styled.button<{ isAlreadyInCart: boolean }>`
  width: 100%;
  padding: 16px;
  margin-top: 18px;
  border-radius: 8px;
  border: none;
  cursor: ${(props) => (props.isAlreadyInCart ? "auto" : "pointer")};
  background-color: ${(props) =>
    props.isAlreadyInCart ? getColor("black") : getColor("orange")};
  color: ${getColor("white")};
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: ${getColor("black")};
  }

  @media ${({ theme }) => theme.medias.mobile} {
  }
`;

export const ItemRatingAndPrice = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemRating = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemRatingCount = styled.p`
  color: ${getColor("darkGrey")};
  margin-left: 8px;
  font-size: 12px;
`;
