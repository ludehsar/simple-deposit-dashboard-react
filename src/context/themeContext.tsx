import { createContext, useContext } from "react";

export enum Theme {
  LightTheme,
  DarkTheme,
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LightTheme,
  setTheme: (Theme) => console.warn("No theme provider"),
});

export const useTheme = (): ThemeContextType =>
  useContext<ThemeContextType>(ThemeContext);
