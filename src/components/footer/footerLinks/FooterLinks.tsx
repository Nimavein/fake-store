import React from "react";
import {
  LinksSection,
  LeftLinks,
  RightLinks,
  FooterLink,
} from "./FooterLinks.styles";

const FooterLinks: React.FC = () => {
  return (
    <LinksSection>
      <LeftLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/store">Store</FooterLink>
        <FooterLink to="/cart">Your Cart</FooterLink>
      </LeftLinks>
      <RightLinks>
        <FooterLink to="#">FAQ</FooterLink>
        <FooterLink to="#">Store Policy</FooterLink>
        <FooterLink to="#">Payment Methods</FooterLink>
        <FooterLink to="#">Shipping</FooterLink>
      </RightLinks>
    </LinksSection>
  );
};

export default FooterLinks;
