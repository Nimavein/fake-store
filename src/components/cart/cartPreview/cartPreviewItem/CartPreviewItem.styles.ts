import styled from "styled-components";
import { getColor } from "../../../../styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartPreviewItemWrapper = styled.div`
  background-color: ${getColor("white")};
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  padding: 20px 12px;
  border-radius: 6px;
`;

export const CartPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CartPreviewImageWrapper = styled.div`
  height: 80px;
  width: 20%;
  display: flex;
  align-items: center;
`;

export const CartItemInfo = styled.div`
  display: flex;
  width: 80%;
  text-align: left;
  margin-left: 14px;
  flex-direction: column;
`;

export const CartItemName = styled.p`
  color: ${getColor("black")};
  font-size: 14px;
  width: 70%;

  @media ${({ theme }) => theme.medias.mobile} {
  }
`;

export const ItemRatingAndPrice = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemAmount = styled.p`
  color: ${getColor("darkGrey")};
  padding: 0 10px 0 10px;
  font-size: 14px;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  color: ${getColor("black")};
`;

export const DeleteItemIcon = styled(FontAwesomeIcon)``;

export const DeleteItemButtom = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

export const TitleAndDeleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Plus = styled(FontAwesomeIcon)``;
export const Minus = styled(FontAwesomeIcon)``;

export const PlusMinusButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
