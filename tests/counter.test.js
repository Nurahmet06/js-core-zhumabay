import { describe, it, expect } from "vitest";
import { counter } from "../src/functions.js";

describe("counter function", () => {
  it("starts from zero", () => {
    const c = counter();

    expect(c.value()).toBe(0);
  });

  it("increases and decreases the value", () => {
    const c = counter();

    c.inc();
    c.inc();
    c.dec();

    expect(c.value()).toBe(1);
  });

  it("creates independent counters", () => {
    const first = counter();
    const second = counter();

    first.inc();
    first.inc();

    expect(first.value()).toBe(2);
    expect(second.value()).toBe(0);
  });
});