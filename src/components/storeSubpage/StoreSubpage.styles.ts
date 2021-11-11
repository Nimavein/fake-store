import styled from "styled-components";

export const StoreSubpageWrapper = styled.section`
  padding-top: 40px;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 36px 20px;
  }
`;
