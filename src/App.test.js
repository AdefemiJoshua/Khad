import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

test("renders app shell", () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
});
