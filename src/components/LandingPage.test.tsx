import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { LandingPage } from "./LandingPage";
import { act } from "react-dom/test-utils";

test("Landing Page", async () => {
  await act(async () => {
    render(
      <Router>
        <AuthProvider>
          <LandingPage />
        </AuthProvider>
      </Router>
    );
  });

  //   console.log(currentUser);
  expect(
    screen.getByText(/unleashing the power of tokenomics/i)
  ).toBeInTheDocument();
});
