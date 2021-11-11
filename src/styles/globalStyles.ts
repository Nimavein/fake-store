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

  body.preload *{
    animation-duration: 0s !important;
    -webkit-animation-duration: 0s !important;
    transition:background-color 0s, opacity 0s, color 0s, width 0s, height 0s, padding 0s, margin 0s !important;}
`;

export default GlobalStyle;
