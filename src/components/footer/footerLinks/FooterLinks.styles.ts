import { Link } from "react-router-dom";
import styled from "styled-components";
import { getColor } from "../../../styles/utils";

export const LinksSection = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  color: ${getColor("white")};
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const LeftLinks = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RightLinks = styled(LeftLinks)``;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${getColor("white")};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 140px;
    transform: scaleX(0);
    height: 2px;
    bottom: -4px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: ${getColor("white")};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
