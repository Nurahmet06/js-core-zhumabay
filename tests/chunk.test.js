import { describe, it, expect } from "vitest";
import { chunk } from "../src/functions.js";

describe("chunk function", () => {
  it("splits an array into smaller arrays", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5]
    ]);
  });

  it("works with an empty array", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("throws an error for invalid size", () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow(TypeError);
  });
});