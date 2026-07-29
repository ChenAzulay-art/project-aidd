import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home page", () => {
  it("renders the About Me heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /about me/i,
      }),
    ).toBeInTheDocument();
  });
});
