import { describe, it, expect } from "vitest";
import { movies } from "./movies";

describe("movies", () => {
  it("should have at least 3 items", () => {
    expect(movies.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Superbad'", () => {
    expect(movies).toContain("Superbad");
  });
});

