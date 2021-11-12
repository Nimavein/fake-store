import React, { useLayoutEffect } from "react";
import {
  HomepageWrapper,
  LeftSection,
  UpperText,
  HomepageTitle,
  LowerText,
  RightSection,
  HomepageLinkToCart,
  HomepageGoToCartButton,
} from "./Homepage.styles";

const Homepage: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <HomepageWrapper>
      <LeftSection className="left-section">
        <HomepageTitle>About Us</HomepageTitle>
        <UpperText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint illum
          exercitationem ducimus dolor quisquam eveniet corrupti in nam eius
          magni mollitia, aperiam necessitatibus excepturi itaque ipsum quam eos
          doloremque unde numquam eaque illo rem ipsa. Rem inventore maxime
          incidunt laudantium.
        </UpperText>
        <LowerText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          quisquam minus illo quos nostrum suscipit, asperiores, deserunt
          voluptates veniam sunt nobis libero quia veritatis saepe accusamus
          natus quibusdam magni fugiat nulla quo, magnam soluta rem? Commodi ut
          atque libero corrupti.
        </LowerText>

        <HomepageLinkToCart to="/store">
          <HomepageGoToCartButton>Browse products</HomepageGoToCartButton>
        </HomepageLinkToCart>
      </LeftSection>
      <RightSection className="right-section"></RightSection>
    </HomepageWrapper>
  );
};

export default Homepage;
