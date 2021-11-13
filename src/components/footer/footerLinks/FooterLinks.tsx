import React from "react";
import { scrollToTop } from "../../../scrollFunction";
import {
  LinksSection,
  LeftLinks,
  RightLinks,
  FooterLink,
  LinksDivider,
} from "./FooterLinks.styles";

const FooterLinks: React.FC = () => {
  return (
    <>
      <LinksSection>
        <LeftLinks>
          <FooterLink onClick={scrollToTop} to="/">
            Home
          </FooterLink>
          <FooterLink onClick={scrollToTop} to="/store">
            Store
          </FooterLink>
          <FooterLink onClick={scrollToTop} to="/cart">
            Your Cart
          </FooterLink>
        </LeftLinks>
        <RightLinks>
          <FooterLink to="#">FAQ</FooterLink>
          <FooterLink to="#">Store Policy</FooterLink>
          <FooterLink to="#">Payment Methods</FooterLink>
          <FooterLink to="#">Shipping</FooterLink>
        </RightLinks>
      </LinksSection>
      <LinksDivider />
    </>
  );
};

export default FooterLinks;
