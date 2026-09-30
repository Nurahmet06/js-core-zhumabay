import { describe, it, expect } from "vitest";
import { unique } from "../src/functions.js";

describe("unique function", () => {
  it("removes duplicate numbers", () => {
    expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  it("works with an empty array", () => {
    expect(unique([])).toEqual([]);
  });

  it("throws an error for wrong input", () => {
    expect(() => unique("hello")).toThrow(TypeError);
  });
});