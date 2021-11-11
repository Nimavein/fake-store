import React, { useState } from "react";
import routes from "../../routes";
import CartPreview from "../cart/cartPreview/CartPreview";
import {
  BagButton,
  BagIcon,
  NavbarLink,
  NavbarLinks,
  NavbarWrapper,
} from "./Navbar.styles";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
      <BagButton onClick={handleCart}>
        <BagIcon icon={faShoppingBag} color="white" size="lg" />
      </BagButton>
      <CartPreview isCartOpen={isCartOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
