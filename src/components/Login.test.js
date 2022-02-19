import { render, screen } from "@testing-library/react";
import { Login } from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

xtest("Render Login", async () => {
  render(
    <Router>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </Router>
  );

  await act(async () => {
    const element = screen.getByRole("button", { name: /login/i });

    expect(element).toBeInTheDocument();
  });
});
