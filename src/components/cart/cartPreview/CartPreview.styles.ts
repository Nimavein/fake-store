import styled from "styled-components";
import { getColor } from "../../../styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    width: 100vw;
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
  padding: 20px;
  width: 100%;

  @media ${({ theme }) => theme.medias.mobile} {
    height: 100%;
    justify-content: center;
    padding: 0;
  }
`;

export const CartPreviewItem = styled.div``;

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
  width: 50%;
  background: ${getColor("orange")};
  color: ${getColor("white")};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 80%;
    position: relative;
    bottom: auto;
    margin-top: 26px;
  }
`;

export const CartPreviewIcon = styled(FontAwesomeIcon)`
  margin: 0 auto 26px auto;
`;
