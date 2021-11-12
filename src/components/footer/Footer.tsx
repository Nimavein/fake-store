import React from "react";
import ContactForm from "./contactForm/ContactForm";
import { FooterWrapper } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ContactForm />
    </FooterWrapper>
  );
};

export default Footer;
