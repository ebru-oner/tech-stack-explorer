export type ThemeMode = "dark" | "light";

export interface ThemeModeContextType {
  themeMode: ThemeMode;
  setThemeMode: () => void;
}
