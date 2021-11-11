import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    medias: {
      mobile: string;
    };
    fontFamily: {
      primaryFont: string;
    };
    color: {
      black: string;
      white: string;
      lightGrey: string;
      darkGrey: string;
      grey: string;
      success: string;
      failure: string;
      background: string;
    };
  }
}
