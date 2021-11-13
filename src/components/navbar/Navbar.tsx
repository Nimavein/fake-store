import React from "react";
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
import { useCartData } from "../../contextProviders/cartProvider";
import { scrollToTop } from "../../scrollFunction";

const Navbar: React.FC = () => {
  const { handleCart } = useCartData();

  return (
    <NavbarWrapper>
      <NavbarLinks>
        {routes.slice(0, 2).map((routes) => {
          return (
            <NavbarLink
              onClick={scrollToTop}
              key={routes.name}
              to={routes.path}
            >
              {routes.name}
            </NavbarLink>
          );
        })}
      </NavbarLinks>
      <BagButton onClick={handleCart}>
        <BagIcon icon={faShoppingBag} color="white" size="lg" />
      </BagButton>
      <CartPreview />
    </NavbarWrapper>
  );
};

export default Navbar;
