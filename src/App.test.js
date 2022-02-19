import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

test("renders learn react link", async () => {
  const Wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  await act(async () => {
    render(<App />, { wrapper: Wrapper });
  });
  const linkElement = screen.getByText(/Unleashing the power of tokenomics/i);
  expect(linkElement).toBeInTheDocument();
});
