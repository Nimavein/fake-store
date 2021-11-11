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
  gap: 12px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${getColor("white")};
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
