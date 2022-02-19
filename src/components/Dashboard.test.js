import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import { act } from "react-dom/test-utils";
import { Dashboard } from "./Dashboard";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  //   useNavigate: () => ({}),
}));

// jest.fn(() => ({
//   handleLogout: jest.fn(() => Promise.resolve("I am signed in!")),
// }));

test("renders Dashboard", async () => {
  await act(async () => {
    render(
      <Router>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </Router>
    );
  });
  const linkElement = screen.getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

// test("when logout clicked then handle logout", async () => {
//   const history = createMemoryHistory();
//   await act(async () => {
//     render(
//       //   <Router history={history}>
//       <AuthProvider>
//         <Dashboard />
//       </AuthProvider>
//       //   </Router>
//     );
//   });

//   const element = screen.getByRole("button", { name: /Logout/i });
//   //   console.log(element);

//   userEvent.click(element);

//   screen.debug();
//   await screen.findByText("Logout");
// });

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
    currentUser: {
      displayName: "Karl",
      photoURL: 1,
      email: "karlhadwen@gmail.com",
    },
    signOut: jest.fn(() => Promise.resolve("I am signed out!")),
  })),
};

jest.fn(() => ({
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve("I am signed in!")),
  currentUser: {
    displayName: "Karl",
    photoURL: 1,
    email: "karlhadwen@gmail.com",
  },
  signOut: jest.fn(() => Promise.resolve("I am signed out!")),
}));

test("when sign in clicked, then route to sign in", async () => {
  await act(async () => {
    render(
      <Router>
        <AuthProvider>
          <Dashboard />
        </AuthProvider>
      </Router>
    );
  });

  await act(async () => {
    // const linkElement = screen.getByRole("button", { name: /logout/i });
    await userEvent.click(screen.getByRole("button", { name: /logout/i }));

    expect(
      screen.getByText(/unleashing the power of tokenomics/i)
    ).toBeInTheDocument();
  });
});
