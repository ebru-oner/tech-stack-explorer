import { render, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "../../contexts/ThemeContext";
import ItemDetails from "./ItemDetails";
import useFetch from "../../hooks/useFetch";
import config from "../../config";

beforeAll(() => {
  vi.mock("../../hooks/useFetch", () => ({
    default: vi.fn(),
  }));

  vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return { ...actual, useParams: vi.fn() };
  });
});

const RenderWithRouter = (component: React.ReactNode) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe("ItemDetails component", () => {
  it("Renders itemDetails", () => {
    const mockUseFetch = vi.mocked(useFetch);
    mockUseFetch.mockReturnValue({ data: { title: "title", description: "description" }, error: "", loading: false });
    const mockUseParams = vi.mocked(useParams);
    mockUseParams.mockReturnValue({ id: "123" });
    RenderWithRouter(<ItemDetails />);
    screen.debug();

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
  });

  it("Renders empty div when itemDetails is not given", () => {
    const mockUseFetch = vi.mocked(useFetch);
    mockUseFetch.mockReturnValue({ data: null, error: "", loading: false });
    const mockUseParams = vi.mocked(useParams);
    mockUseParams.mockReturnValue({ id: "123" });
    RenderWithRouter(<ItemDetails />);
    screen.debug();

    expect(screen.queryByText("title")).not.toBeInTheDocument();
    expect(screen.queryByText("description")).not.toBeInTheDocument();
  });

  it("Renders loading when itemDetails is not fetched yet", () => {
    const mockUseFetch = vi.mocked(useFetch);
    mockUseFetch.mockReturnValue({ data: null, error: "", loading: true });
    const mockUseParams = vi.mocked(useParams);
    mockUseParams.mockReturnValue({ id: "123" });
    RenderWithRouter(<ItemDetails />);
    screen.debug();

    expect(screen.queryByText("title")).not.toBeInTheDocument();
    expect(screen.queryByText("description")).not.toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Renders error when itemDetails fetching has error", () => {
    const mockUseFetch = vi.mocked(useFetch);
    mockUseFetch.mockReturnValue({ data: null, error: "Test error", loading: false });
    const mockUseParams = vi.mocked(useParams);
    mockUseParams.mockReturnValue({ id: "123" });
    RenderWithRouter(<ItemDetails />);
    screen.debug();

    expect(screen.queryByText("title")).not.toBeInTheDocument();
    expect(screen.queryByText("description")).not.toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();
  });

  it("Calls useFetch with the correct URL", () => {
    const mockUseFetch = vi.mocked(useFetch);
    const mockUseParams = vi.mocked(useParams);
    const mockId = "456";
    mockUseParams.mockReturnValue({ id: mockId });

    RenderWithRouter(<ItemDetails />);

    expect(mockUseFetch).toHaveBeenCalledWith(`${config.api.server}/tech-items/${mockId}`);
  });
});
