import styled from "styled-components";

export const ItemWrapper = styled.div`
  break-inside: avoid;
  transform: translateZ(0);
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const ItemImage = styled.img`
  max-width: 100%;
`;
