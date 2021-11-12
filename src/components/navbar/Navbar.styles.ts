import styled from "styled-components";
import { Link } from "react-router-dom";
import { getColor } from "../../styles/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${getColor("black")};
  z-index: 10;
  display: flex;
  padding: 24px;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 16px;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${getColor("white")};
  text-transform: uppercase;
  position: relative;
  font-weight: 500;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${getColor("white")};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const BagIcon = styled(FontAwesomeIcon)`
  font-size: 1.6em;
`;

export const BagButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  z-index: 4;
`;
