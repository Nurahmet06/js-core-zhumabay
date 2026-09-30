import { describe, it, expect } from "vitest";
import { memoize } from "../src/functions.js";

describe("memoize function", () => {
  it("returns the correct result", () => {
    const add = memoize((a, b) => a + b);

    expect(add(2, 3)).toBe(5);
  });

  it("uses cached results", () => {
    let calls = 0;

    const multiply = memoize((a, b) => {
      calls++;
      return a * b;
    });

    multiply(2, 3);
    multiply(2, 3);

    expect(calls).toBe(1);
  });

  it("throws an error for invalid input", () => {
    expect(() => memoize("hello")).toThrow(TypeError);
  });
});