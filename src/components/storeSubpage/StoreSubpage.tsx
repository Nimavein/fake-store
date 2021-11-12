import React from "react";
import Categories from "./categories/Categories";
import Items from "./items/Items";
import { StoreSubpageWrapper } from "./StoreSubpage.styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useCategoriesData } from "../../contextProviders/categoriesProvider";

const StoreSubpage: React.FC = () => {
  const categories: any = useCategoriesData();

  return (
    <StoreSubpageWrapper>
      <Tabs>
        <TabList>
          <Tab>ALL</Tab>
          {categories.map((category: string, index: number) => {
            return <Tab key={index}>{category}</Tab>;
          })}
        </TabList>
        <TabPanel>
          <Items category="all" />
        </TabPanel>
        {categories.map((category: string, index: number) => {
          return (
            <TabPanel key={index}>
              <Items category={category} />
            </TabPanel>
          );
        })}
      </Tabs>
    </StoreSubpageWrapper>
  );
};

export default StoreSubpage;
