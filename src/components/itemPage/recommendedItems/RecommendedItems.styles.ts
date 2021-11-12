import { Link } from "react-router-dom";
import styled from "styled-components";
import { getColor } from "../../../styles/utils";

export const CarouselItemWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;
export const CarouselImage = styled.img`
  max-width: 200px;
  max-height: 160px;
  margin-bottom: 20px;
`;

export const CarouselItemTitle = styled.p`
  align-self: flex-start;
`;
export const CarouselItemPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  margin-top: 12px;
`;

export const StyledCarouselLink = styled(Link)`
  text-decoration: none;
  color: ${getColor("black")};
`;
