import { describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "./ThemeContext";
import NavBar from "../components/NavBar/NavBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

Storage.prototype.getItem = vi.fn(() => "light");
Storage.prototype.setItem = vi.fn();

describe("Theme provider", () => {
  it("renders with light themeand stores it in the localstorage", () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    );
    screen.debug();
    expect(screen.getByText("light")).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");
  });
});
