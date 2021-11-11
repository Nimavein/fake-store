import styled from "styled-components";
import { getColor } from "../../../styles/utils";

export const CartPreviewWrapper = styled.section<{ isCartOpen: boolean }>`
  background-color: ${getColor("darkGrey")};
  position: absolute;
  color: ${getColor("white")};
  right: 0;
  top: 70px;
  height: 400px;
  width: 400px;

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
`;

export const GoToCartButton = styled.button`
  padding: 16px;
  width: 50%;
  background: ${getColor("orange")};
  color: ${getColor("white")};
  border: none;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;
