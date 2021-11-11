import React from "react";
import routes from "../../routes";
import { NavbarLink, NavbarLinks, NavbarWrapper } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarLinks>
        {routes.slice(0, 2).map((routes) => {
          return (
            <NavbarLink key={routes.name} to={routes.path}>
              {routes.name}
            </NavbarLink>
          );
        })}
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
