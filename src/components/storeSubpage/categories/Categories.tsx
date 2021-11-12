import React from "react";
import { useCategoriesData } from "../../../contextProviders/categoriesProvider";
import { CategoriesWrapper } from "./Categories.styles";
import Category from "./category/Category";

const Categories: React.FC = () => {
  const categories: any = useCategoriesData();
  return (
    <CategoriesWrapper>
      {categories.map((category: string, index: number) => {
        return <Category key={index} categoryName={category} />;
      })}
    </CategoriesWrapper>
  );
};

export default Categories;
