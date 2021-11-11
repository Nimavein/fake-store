import { createGlobalStyle } from "styled-components";
import { getColor, getFontFamily } from "./utils";

const GlobalStyle = createGlobalStyle`
   html {
    min-height: 100%;
  }
    
  body {
    background: ${getColor("white")};
  }

  span {
    position: absolute; 
    left: 50%; 
    transform: translate(-50%, 100%);
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${getFontFamily("primaryFont")};
  }
`;

export default GlobalStyle;
