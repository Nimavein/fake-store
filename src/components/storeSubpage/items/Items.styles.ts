import styled from "styled-components";

export const ItemsWrapper = styled.section`
  column-count: 6;

  @media (max-width: 1600px) {
    column-count: 5;
  }

  @media (max-width: 1368px) {
    column-count: 4;
  }

  @media ${({ theme }) => theme.medias.tablet} {
    column-count: 3;
  }

  @media ${({ theme }) => theme.medias.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
