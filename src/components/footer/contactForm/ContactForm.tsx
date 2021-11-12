import React, { useState, useEffect } from "react";
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

import { useForm } from "react-hook-form";
import { FormDataType } from "../../../types";

const ContactForm: React.FC = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    let submitSuccessfulTimer = setTimeout(
      () => setIsSubmitSuccessful(false),
      4000
    );
    return () => {
      clearTimeout(submitSuccessfulTimer);
    };
  }, [isSubmitSuccessful]);

  const onSubmit = (data: FormDataType) => {
    setIsSubmitSuccessful(true);
    console.log(data);
    reset();
  };

  return (
    <ContactFormWrapper>
      <ContactUsText>Contact Us!</ContactUsText>
      <FormDivider />
      <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
        <NameAndMail>
          <Name placeholder="Name" {...register("name")} required />
          <Mail
            placeholder="E-mail"
            type="email"
            {...register("email")}
            required
          />
        </NameAndMail>
        <Message
          placeholder="Enter your message..."
          {...register("message")}
          required
        />
        <SendMessageButton
          isSubmitSuccessful={isSubmitSuccessful}
          type="submit"
        >
          {isSubmitSuccessful ? "Message Sent" : "Send"}
        </SendMessageButton>
      </StyledContactForm>
    </ContactFormWrapper>
  );
};

export default ContactForm;
