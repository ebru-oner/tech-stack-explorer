import { describe, expect, it, vi } from "vitest";
import useFetch from "../../hooks/useFetch";
import { ThemeProvider } from "../../contexts/ThemeContext";
import ItemGrid from "./ItemGrid";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import config from "../../config";

vi.mock("../../hooks/useFetch", () => ({
  default: vi.fn(),
}));

describe("Item grid component", () => {
  it("Renders ItemGrid", () => {
    const mockUseFetch = vi.mocked(useFetch);
    mockUseFetch.mockReturnValue({
      data: [
        { title: "title-1", description: "description-1" },
        { title: "title-2", description: "description-2" },
      ],
      error: "",
      loading: false,
    });

    render(
      <ThemeProvider>
        <BrowserRouter>
          <ItemGrid />
        </BrowserRouter>
      </ThemeProvider>
    );

    screen.debug();

    expect(screen.getByText("title-1")).toBeInTheDocument();
    expect(screen.getByText("description-1")).toBeInTheDocument();
    expect(screen.getByText("title-2")).toBeInTheDocument();
    expect(screen.getByText("description-2")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("Calls useFetch with the correct URL", () => {
    const mockUseFetch = vi.mocked(useFetch);
    render(
      <ThemeProvider>
        <BrowserRouter>
          <ItemGrid />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(mockUseFetch).toHaveBeenCalledWith(`${config.api.server}/tech-items`);
  });
});
