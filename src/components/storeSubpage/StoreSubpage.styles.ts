import styled from "styled-components";

export const StoreSubpageWrapper = styled.section`
  padding: 92px 24px 32px 24px;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 72px 20px;
  }
`;
