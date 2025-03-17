import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ItemCard from "./ItemCard";
import { Item } from "../../models/Item";
import React from "react";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const mockData: Item = {
  _id: "123",
  title: "Test title",
  description: "Test description",
};

const RenderWithRouter = (component: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </ThemeProvider>
  );
};

describe("ItemCard component", () => {
  it("Renders item card compoent", () => {
    RenderWithRouter(<ItemCard item={mockData} />);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Details" })).toBeInTheDocument();
  });

  it("Renders empty div when there is no item", () => {
    RenderWithRouter(<ItemCard item={null} />);
    expect(screen.queryByText("Test title")).not.toBeInTheDocument();
    expect(screen.queryByText("Test description")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Details" })).not.toBeInTheDocument;
  });

  it("Routes to details when details button clicked", () => {
    RenderWithRouter(<ItemCard item={mockData} />);
    const button = screen.getByRole("button", { name: "Details" });
    fireEvent.click(button);
    expect(screen.getByText(/details/i)).toBeInTheDocument();
  });
});
