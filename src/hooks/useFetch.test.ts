import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import useFetch from "./useFetch";

vi.mock("axios");

describe("useFetch hook", () => {
  it("fetched data successfully", async () => {
    const mockedAxios = vi.mocked(axios.get);
    const mockData = { id: 1, title: "test-title" };
    mockedAxios.mockResolvedValue({ status: 200, data: mockData });
    const { result } = renderHook(() => useFetch<typeof mockData>("http://someurl"));

    await waitFor(() => expect(result.current.data).toEqual(mockData));
    expect(result.current.error).toEqual("");
    expect(result.current.loading).toBeFalsy();
  });

  it("handles API error", async () => {
    const mockedAxios = vi.mocked(axios.get);
    mockedAxios.mockRejectedValue(new Error("Network Error"));

    const { result } = renderHook(() => useFetch("http://someurl"));

    await waitFor(() => expect(result.current.error).toBe("Network Error"));
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("handles loading state", async () => {
    const mockedAxios = vi.mocked(axios.get);
    mockedAxios.mockImplementation(() => new Promise((resolve) => setTimeout(() => resolve({ status: 200, data: {} }), 100)));

    const { result } = renderHook(() => useFetch("http://someurl"));

    expect(result.current.loading).toBe(true);
  });
});
