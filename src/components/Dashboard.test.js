import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

test('Dashboard renders', async () => {
  await act(async () => {
    render(
      <AuthProvider
        overrideValue={{
          currentUser: {
            email: 'peter111@gmail.com',
          },
        }}
      >
        <Router>
          <Dashboard />
        </Router>
      </AuthProvider>
    );
  });

  const element = screen.getByText(/dashboard/i);
  expect(element).toBeInTheDocument();
  const user = screen.getByText(/peter111@gmail.com/i);
  expect(user).toBeInTheDocument();
});

test('When Logout clicked, handle logout function is fired', async () => {
  const logOut = jest.fn(() => {
    console.log('mock error thrown');
  });

  await act(async () => {
    render(
      <AuthProvider
        overrideValue={{
          currentUser: {
            email: 'peter111@gmail.com',
          },
          logOut,
        }}
      >
        <Router>
          <Dashboard />
        </Router>
      </AuthProvider>
    );
  });

  const element = screen.getByRole('button', { name: /logout/i });
  expect(element).toBeInTheDocument();
  await act(async () => {
    userEvent.click(element);
  });

  expect(logOut).toBeCalledTimes(1);
});

test('When Logout fails, error is thrown', async () => {
  const logOut = jest.fn(() => {
    console.log('mock error thrown');
    throw new Error();
  });

  await act(async () => {
    render(
      <AuthProvider
        overrideValue={{
          currentUser: {
            email: 'peter111@gmail.com',
          },
          logOut,
        }}
      >
        <Router>
          <Dashboard />
        </Router>
      </AuthProvider>
    );
  });

  const element = screen.getByRole('button', { name: /logout/i });
  expect(element).toBeInTheDocument();
  await act(async () => {
    userEvent.click(element);
  });

  expect(logOut).toBeCalledTimes(1);
});
