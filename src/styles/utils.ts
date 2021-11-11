import { DefaultTheme } from "styled-components";
import { color, fontFamily } from "./theme";

type StyledComponentsTheme = { theme: DefaultTheme };

export const getColor =
  (colorName: keyof typeof color) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.color[colorName];

export const getFontFamily =
  (fontName: keyof typeof fontFamily) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.fontFamily[fontName];
