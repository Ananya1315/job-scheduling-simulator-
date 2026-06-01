import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders simulator title", () => 
    {
  render(<App />);
  const title = screen.getByText(/Job Scheduling Simulator/i);
  expect(title).toBeInTheDocument();
});