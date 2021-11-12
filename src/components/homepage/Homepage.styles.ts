import styled from "styled-components";
import { getColor } from "../../styles/utils";

export const HomepageWrapper = styled.section`
  height: 100vh;
  width: 100%;
  color: ${getColor("white")};
  display: flex;
  padding: 94px 24px 24px 24px;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 54px 0 0 0;
    height: 100%;
    flex-direction: column;

    .left-section {
      order: 2;
    }
    .right-section {
      order: 1;
    }
  }
`;

export const LeftSection = styled.div<{ className: string }>`
  width: 50%;
  height: 70%;
  background-color: ${getColor("darkGrey")};
  text-align: center;
  padding: 60px 48px 0 48px;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    padding: 28px 20px 20px;
  }
`;

export const UpperText = styled.p`
  letter-spacing: 0.05em;
  font-weight: 300;
  margin-bottom: 24px;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    font-size: 14px;
  }
`;

export const LowerText = styled(UpperText)``;

export const HomepageTitle = styled.p`
  font-weight: 600;
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 36px;
  letter-spacing: 0.15em;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const RightSection = styled.div<{ className: string }>`
  width: 50%;
  background-image: url("bag.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 70%;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    height: 450px;
  }
`;
