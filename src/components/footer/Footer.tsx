import React from "react";
import ContactForm from "./contactForm/ContactForm";
import { FooterWrapper } from "./Footer.styles";
import FooterLinks from "./footerLinks/FooterLinks";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLinks />
      <ContactForm />
    </FooterWrapper>
  );
};

export default Footer;
