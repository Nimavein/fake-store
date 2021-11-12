import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getColor } from "../../styles/utils";

export const StoreSubpageWrapper = styled.section`
  padding: 92px 24px 32px 24px;

  @media ${({ theme }) => theme.medias.mobile} {
    padding: 72px 20px;
  }
`;

export const StyledTabs = styled(Tabs)``;

export const StyledTabList = styled(TabList)<{ areCategoriesVisible: boolean }>`
  display: ${(props) => (props.areCategoriesVisible ? "flex" : "none")};
  justify-content: center;
  margin-bottom: 32px;
  gap: 6px;
  @media ${({ theme }) => theme.medias.mobile} {
    align-items: center;
    margin-bottom: 0;
    flex-direction: column;
  }
`;

export const StyledTab = styled(Tab)`
  list-style: none;

  &.react-tabs__tab--selected {
    button {
      background-color: ${getColor("orange")};
    }
  }
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    text-align: center;
  }
`;
export const StyledTabPanel = styled(TabPanel)``;

export const TabButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  border-radius: 6px;
  color: ${getColor("white")};
  font-size: 14px;
  list-style: none;
  cursor: pointer;
  background-color: ${getColor("black")};
  border: none;
  padding: 12px;
  transition: ease-in-out all 0.3s;

  &:hover {
    background-color: ${getColor("orange")};
  }

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    text-align: center;
    &:hover {
      background-color: ${getColor("black")};
    }
  }
`;

export const ToogleCategoriesButton = styled(TabButton)`
  margin-bottom: 20px;
  @media ${({ theme }) => theme.medias.mobile} {
  }
`;
