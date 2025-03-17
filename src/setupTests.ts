import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"; // Adds extra matchers like toBeInTheDocument()

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});
