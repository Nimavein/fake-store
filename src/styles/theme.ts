import { DefaultTheme } from "styled-components";

export const fontFamily = { primaryFont: "Roboto" };

export const color = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#868686",
  darkGrey: "#282828",
  lightGrey: "#E8E8E8",
  success: "#6FB46E",
  failure: "#BE4E35",
  orange: "#FF5F1F",
  background:
    "linear-gradient(90deg, rgba(26,40,71,1) 0%, rgba(241,230,230,1) 0%, rgba(244,250,255,1) 100%);",
} as const;

export const medias = {
  mobile: "(max-width: 768px)",
  tablet: "(max-width: 1024px)",
} as const;

export const theme: DefaultTheme = {
  fontFamily,
  color,
  medias,
} as const;

export default theme;
