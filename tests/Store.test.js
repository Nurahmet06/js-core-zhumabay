import { describe, it, expect } from "vitest";
import { Store, SortedStore } from "../src/Store.js";

describe("Store class", () => {
  it("starts empty", () => {
    const store = new Store();
    expect(store.total()).toBe(0);
  });

  it("adds an item", () => {
    const store = new Store();
    store.add({ id: 1, name: "Apple" });
    expect(store.total()).toBe(1);
  });

  it("finds an item by id", () => {
    const store = new Store([{ id: 1, name: "Apple" }]);
    expect(store.find(1).name).toBe("Apple");
  });

  it("removes an item", () => {
    const store = new Store([{ id: 1, name: "Apple" }]);
    expect(store.remove(1)).toBe(true);
    expect(store.total()).toBe(0);
  });

  it("returns false if item does not exist", () => {
    const store = new Store();
    expect(store.remove(99)).toBe(false);
  });

  it("rejects invalid constructor input", () => {
    expect(() => new Store("hello")).toThrow(TypeError);
  });

  it("creates a store using static method", () => {
    const store = Store.create([{ id: 1 }]);
    expect(store.total()).toBe(1);
  });
});

describe("SortedStore class", () => {
  it("returns items sorted by name when adding", () => {
    const store = new SortedStore();
    store.add({ id: 1, name: "Zebra" });

    const result = store.add({ id: 2, name: "Apple" });

    expect(result.map(item => item.name)).toEqual([
      "Apple",
      "Zebra"
    ]);
  });
});