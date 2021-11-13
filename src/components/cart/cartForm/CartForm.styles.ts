import styled from "styled-components";
import { getColor } from "../../../styles/utils";
import { SendMessageButton } from "../../footer/contactForm/ContactForm.styles";

export const CartFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CartFormLabel = styled.label`
  font-weight: 600;
`;

export const CartFormInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  text-indent: 8px;
  border: 1px solid ${getColor("lightGrey")};
  border-radius: 6px;
`;

export const CartFormSelect = styled.select`
  margin-top: 8px;
  height: 40px;
  text-indent: 8px;
  border: 1px solid ${getColor("lightGrey")};
  border-radius: 6px;
`;
export const CartFormOption = styled.option``;

export const CartFormEntry = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const InvisibleInput = styled.input`
  display: none;
`;

export const CartFormSubmitButton = styled(SendMessageButton)``;
