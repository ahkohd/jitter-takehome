import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const panelLabel = screen.getByText(
    /Pick a point to rotate the rectangle on the left/i
  );
  expect(panelLabel).toBeInTheDocument();
});
