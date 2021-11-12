import styled from "styled-components";
import { getColor } from "../../../styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CartPreviewWrapper = styled.section<{ isCartOpen: boolean }>`
  background-color: ${getColor("darkGrey")};
  position: absolute;
  color: ${getColor("white")};
  right: 0;
  top: 70px;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0 0 0 16px;
  overflow: scroll;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  z-index: 100;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  animation: ${(props) =>
    props.isCartOpen ? "slidein 1s forwards" : "slideout 1s forwards"};

  @keyframes slidein {
    0% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes slideout {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(400px);
    }
  }

  @media ${({ theme }) => theme.medias.mobile} {
    top: 54px;
    height: 100vh;
    width: 100%;
    border-radius: 0;

    @keyframes slidein {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    @keyframes slideout {
      0% {
        height: 100vh;
        transform: translateX(0%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
`;

export const CartPreviewContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 14px 0 14px;
  width: 100%;

  @media ${({ theme }) => theme.medias.mobile} {
    justify-content: center;
    padding-bottom: 60px;
  }
`;

export const EmptyCartPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.medias.mobile} {
  }
`;

export const EmptyCartPreviewText = styled.p``;

export const GoToCartButton = styled.button`
  padding: 16px;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  width: 100%;
  background: ${getColor("orange")};
  color: ${getColor("white")};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: ${getColor("black")};
  }

  @media ${({ theme }) => theme.medias.mobile} {
    background-color: ${getColor("orange")};
  }
`;

export const CartPreviewIcon = styled(FontAwesomeIcon)`
  margin: 0 auto 26px auto;
`;

export const TotalValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TotalValue = styled.p`
  font-weight: 600;
  color: ${getColor("white")};
`;

export const TotalValueText = styled.p`
  font-weight: 600;
  color: ${getColor("white")};
`;

export const LinkToCart = styled(Link)`
  margin-bottom: 20px;
`;

export const Divider = styled.hr`
  border: 1px solid ${getColor("white")};
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
`;
