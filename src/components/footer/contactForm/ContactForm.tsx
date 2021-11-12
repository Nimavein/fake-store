import React from "react";
import {
  ContactFormWrapper,
  ContactUsText,
  Mail,
  Message,
  Name,
  NameAndMail,
  SendMessageButton,
  StyledContactForm,
  FormDivider,
} from "./ContactForm.styles";

const ContactForm: React.FC = () => {
  return (
    <ContactFormWrapper>
      <ContactUsText>Contact Us!</ContactUsText>
      <FormDivider />
      <StyledContactForm>
        <NameAndMail>
          <Name placeholder="Name" />
          <Mail placeholder="E-mail" />
        </NameAndMail>
        <Message placeholder="Enter your message..." />
        <SendMessageButton type="submit">Send</SendMessageButton>
      </StyledContactForm>
    </ContactFormWrapper>
  );
};

export default ContactForm;
