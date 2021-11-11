import styled from "styled-components";
import { Link } from "react-router-dom";
import { getColor } from "../../styles/utils";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${getColor("black")};
  z-index: 10;
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${getColor("white")};
`;
