import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeMode, ThemeModeContextType } from "../models/Theme";

const ThemeContext = createContext<ThemeModeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
  const [themeMode, setThemeMode] = useState<ThemeMode>(savedTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.body.className = themeMode;
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return <ThemeContext.Provider value={{ themeMode, setThemeMode: toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
