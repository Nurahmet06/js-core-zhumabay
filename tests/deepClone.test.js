import { describe, it, expect } from "vitest";
import { deepClone } from "../src/functions.js";

describe("deepClone function", () => {
  it("copies a nested object", () => {
    const original = {
      name: "Nurahmet",
      scores: [80, 90],
      address: { city: "Astana" }
    };

    const copy = deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.address).not.toBe(original.address);
  });

  it("copies an array", () => {
    expect(deepClone([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("works with null", () => {
    expect(deepClone(null)).toBe(null);
  });
});