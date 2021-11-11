import React from "react";
import Items from "./items/Items";
import { StoreSubpageWrapper } from "./StoreSubpage.styles";

const StoreSubpage: React.FC = () => {
  return (
    <StoreSubpageWrapper>
      <Items />
    </StoreSubpageWrapper>
  );
};

export default StoreSubpage;
