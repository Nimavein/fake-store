import styled from "styled-components";

export const ItemsWrapper = styled.section`
  column-count: 6;

  @media ${({ theme }) => theme.medias.tablet} {
    column-count: 3;
  }

  @media ${({ theme }) => theme.medias.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
