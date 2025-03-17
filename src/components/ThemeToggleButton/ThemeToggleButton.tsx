import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeModeContextType } from "../../models/Theme";

const ThemeToggleButton: React.FC = () => {
  const context = useContext<ThemeModeContextType | undefined>(ThemeContext);
  if (!context) {
    throw new Error("Theme context must be ised withing themProvider");
  }

  return (
    <div className="flex items-center">
      <label className="font-light tracking-tighter text-xs mx-2">{context.themeMode}</label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={context.themeMode === "dark"} onChange={context.setThemeMode} className="sr-only peer" />
        <span className="w-11 h-6 bg-gray-200 peer-checked:bg-secondary rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 transition-all duration-200 ease-in-out"></span>
      </label>
    </div>
  );
};

export default ThemeToggleButton;
