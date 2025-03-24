import { DefaultTheme, ThemeProvider } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      "--gray-980": "#1a1818";
      "--gray-950": "#0f0f0f";
      "--gray-700": "#5d5d5d";
      "--gray-400": "#b4b4b4";
      "--gray-50": "#fcfcf9";
      "--white": "#ffffff";
      "--off-white": "#f3f3ed";
    };
  }
}

const theme: DefaultTheme = {
  fontSize: {},
  color: {
    "--gray-980": "#1a1818",
    "--gray-950": "#0f0f0f",
    "--gray-700": "#5d5d5d",
    "--gray-400": "#b4b4b4",
    "--gray-50": "#fcfcf9",
    "--white": "#ffffff",
    "--off-white": "#f3f3ed",
  },
};

export default function GlobalThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
