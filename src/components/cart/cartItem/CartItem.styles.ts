import styled from "styled-components";
import { getColor } from "../../../styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CartPreviewImage,
  CartPreviewImageWrapper,
  CartPreviewItemWrapper,
  CartItemInfo,
  CartItemName,
  ItemAmount,
  ItemPrice,
  TitleAndDeleteWrapper,
  AmountWrapper,
  PlusMinusButton,
  ItemRatingAndPrice,
} from "../cartPreview/cartPreviewItem/CartPreviewItem.styles";

export const CartItemWrapper = styled(CartPreviewItemWrapper)`
  padding-top: 36px;
`;

export const CartImage = styled(CartPreviewImage)``;

export const CartImageWrapper = styled(CartPreviewImageWrapper)``;

export const CartItemInfoWrapper = styled(CartItemInfo)``;

export const StyledCartItemName = styled(CartItemName)`
  @media ${({ theme }) => theme.medias.mobile} {
  }
`;
export const StyledItemRatingAndPrice = styled(ItemRatingAndPrice)``;

export const StyledItemAmount = styled(ItemAmount)``;

export const StyledItemPrice = styled(ItemPrice)``;

export const DeleteItemIcon = styled(FontAwesomeIcon)``;

export const DeleteItemButtom = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

export const StyledTitleAndDeleteWrapper = styled(TitleAndDeleteWrapper)``;

export const StyledAmountWrapper = styled(AmountWrapper)``;

export const Plus = styled(FontAwesomeIcon)``;
export const Minus = styled(FontAwesomeIcon)``;

export const StyledPlusMinusButton = styled(PlusMinusButton)``;
