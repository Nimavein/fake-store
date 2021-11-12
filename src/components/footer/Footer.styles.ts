import styled from "styled-components";
import { getColor } from "../../styles/utils";

export const FooterWrapper = styled.footer`
  margin-top: auto;
  width: 100%;
  background-color: ${getColor("black")};
  color: white;
  text-align: center;
  padding: 24px;
  min-height: 252px;
`;
