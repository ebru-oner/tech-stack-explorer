import { Link } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

const NavBar = () => {
  return (
    <nav className="dark:bg-darkPrimary bg-primary dark:text-darkSecondary text-secondary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">Home</Link>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default NavBar;
