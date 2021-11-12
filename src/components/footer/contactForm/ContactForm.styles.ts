import styled from "styled-components";
import { getColor } from "../../../styles/utils";
import { HomepageGoToCartButton } from "../../homepage/Homepage.styles";

export const ContactFormWrapper = styled.section`
  width: 50%;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const NameAndMail = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Name = styled.input`
  width: 50%;
  background-color: ${getColor("darkGrey")};
  border: none;
  height: 30px;
  color: ${getColor("white")};
  border-radius: 6px;
  text-indent: 8px;
`;
export const Mail = styled(Name)``;
export const Message = styled.textarea`
  width: 100%;
  height: 120px;
  background-color: ${getColor("darkGrey")};
  border: none;
  border-radius: 6px;
  color: ${getColor("white")};
  text-indent: 8px;
  padding-top: 8px;
`;

export const ContactUsText = styled.p`
  color: ${getColor("white")};
  font-weight: 600;
  text-align: start;
  margin-bottom: 12px;
`;

export const SendMessageButton = styled(HomepageGoToCartButton)<{
  isSubmitSuccessful: boolean;
}>`
  margin-top: 18px;
  width: ${(props) => (props.isSubmitSuccessful ? "100%" : "40%")};
  place-self: flex-end;
  background-color: ${(props) =>
    props.isSubmitSuccessful ? getColor("success") : getColor("orange")};

  &:hover {
    background-color: ${(props) =>
      props.isSubmitSuccessful ? getColor("success") : getColor("orange")};
  }

  @media ${({ theme }) => theme.medias.mobile} {
    width: ${(props) => (props.isSubmitSuccessful ? "100%" : "50%")};
  }
`;

export const FormDivider = styled.hr`
  border: 1px solid ${getColor("orange")};
  width: 20%;
  height: 1px;
  margin: 12px 0;
`;
