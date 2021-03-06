import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const headingElement = screen.getByText(/colourful horizons/i);
  expect(headingElement).toBeInTheDocument();
});
