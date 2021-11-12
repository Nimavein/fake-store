import React, { useState } from "react";
import Items from "./items/Items";
import {
  StoreSubpageWrapper,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTabs,
  TabButton,
  ToogleCategoriesButton,
} from "./StoreSubpage.styles";

import { useCategoriesData } from "../../contextProviders/categoriesProvider";

const StoreSubpage: React.FC = () => {
  const [areCategoriesVisible, setAreCategoriesVisible] =
    useState<boolean>(false);
  const categories: any = useCategoriesData();

  const handleCategoriesVisibility = () => {
    setAreCategoriesVisible(!areCategoriesVisible);
  };

  return (
    <StoreSubpageWrapper>
      <ToogleCategoriesButton onClick={handleCategoriesVisibility}>
        {areCategoriesVisible ? "Hide Categories" : "Show Categories"}
      </ToogleCategoriesButton>
      <StyledTabs>
        <StyledTabList areCategoriesVisible={areCategoriesVisible}>
          <StyledTab>
            <TabButton onClick={handleCategoriesVisibility}>ALL</TabButton>
          </StyledTab>
          {categories.map((category: string, index: number) => {
            return (
              <StyledTab key={index}>
                <TabButton onClick={handleCategoriesVisibility}>
                  {category}
                </TabButton>
              </StyledTab>
            );
          })}
        </StyledTabList>
        <StyledTabPanel>
          <Items category="all" />
        </StyledTabPanel>
        {categories.map((category: string, index: number) => {
          return (
            <StyledTabPanel key={index}>
              <Items category={category} />
            </StyledTabPanel>
          );
        })}
      </StyledTabs>
    </StoreSubpageWrapper>
  );
};

export default StoreSubpage;
