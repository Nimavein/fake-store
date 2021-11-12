import React from "react";
import { CategoryPropsType } from "../../../../types";
import { CategoryWrapper } from "./Category.styles";

const Category: React.FC<CategoryPropsType> = (props) => {
  console.log(props.categoryName);

  return <CategoryWrapper>{props.categoryName}</CategoryWrapper>;
};

export default Category;
