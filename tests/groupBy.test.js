import { describe, it, expect } from "vitest";
import { groupBy } from "../src/functions.js";

describe("groupBy function", () => {
  it("groups objects by category", () => {
    const items = [
      { name: "Apple", category: "fruit" },
      { name: "Carrot", category: "vegetable" },
      { name: "Banana", category: "fruit" }
    ];

    const result = groupBy(items, item => item.category);

    expect(result).toEqual({
      fruit: [items[0], items[2]],
      vegetable: [items[1]]
    });
  });

  it("works with an empty array", () => {
    expect(groupBy([], item => item.category)).toEqual({});
  });

  it("throws an error for wrong input", () => {
    expect(() => groupBy("hello", item => item)).toThrow(TypeError);
  });
});