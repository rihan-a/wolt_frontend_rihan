import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calculate delivery fees button", () => {
    render(<App />);
    const linkElement = screen.getByText(/calculate delivery fees/i);
    expect(linkElement).toBeInTheDocument();
});
