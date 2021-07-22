import { Colors } from "./types";

export const baseColors = {
    failure: "#DD5252",
  primary: "#03383F",
  primaryBright: "#03383F",
  primaryDark: "#1c6e70",
  secondary: "#273C47",
  success: "#5FDDB6",
  warning: "#D199AE",
};

export const additionalColors = {
 binance: "#638E91",
  overlay: "#123D41",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#F4F4F9",
  backgroundDisabled: "#E8E9EB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#F4F4F9",
  contrast: "#191325",
  dropdown: "#F4F4F9",
  dropdownDeep: "#E2E6ED",
  invertedContrast: "#FFFFFF",
  input: "#DFEFEF",
  inputSecondary: "#DFEFEE",
  tertiary: "#B0FFD4",
  text: "#19213A",
  textDisabled: "#BDC2C4",
  textSubtle: "#119B71",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #B0FFD4 0%, #DFE7F2 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #DFE7F2 0%, #B0FFD4 100%)",
    cardHeader: "linear-gradient(111.68deg, #F4F4F9 0%, #E2E6ED 100%)",
    blue: "linear-gradient(180deg, #AAE5BD 0%, #C3E0DF 100%)",
    violet: "linear-gradient(180deg, #AAE5BD 0%, #C3E0DF 100%)",
    violetAlt: "linear-gradient(180deg, #AAE5BD 0%, #C3E0DF 100%)",
    gold: "linear-gradient(180deg, #5FDDB6 0%, #0F3E41 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#27E29F",
  background: "#1e2d33",
  backgroundDisabled: "#101D21",
  backgroundAlt: "#10191e",
  cardBorder: "#11242D",
  contrast: "#14162D",
  dropdown: "#1B1E1E",
  dropdownDeep: "#0C1110",
  invertedContrast: "#122023",
  input: "#304249",
  inputSecondary: "#22494F",
  primaryDark: "#e3e1e1",
  tertiary: "#353547",
  text: "#E1F3F4",
  textDisabled: "#BDC2C4",
  textSubtle: "#9AEFD5",
  disabled: "#4A5160",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #315359 0%, #262E33 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #262E33 0%, #315359 100%)",
    cardHeader: "linear-gradient(166.77deg, #31475B 0%, #303F44 100%)",
    blue: "linear-gradient(180deg, #31475B 0%, #49565E 100%)",
    violet: "linear-gradient(180deg, #31475B 0%, #49565E 100%)",
    violetAlt: "linear-gradient(180deg, #31475B 0%, #49565E 100%)",
    gold: "linear-gradient(180deg, #5FDDB6 0%, #0F3E41 100%)",
  },
};