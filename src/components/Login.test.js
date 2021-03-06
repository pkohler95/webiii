import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Login } from './Login';
import { AuthProvider } from '../contexts/AuthContext';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Happy path', () => {
  test('Render Login', async () => {
    await act(async () => {
      render(
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /login/i });

    expect(element).toBeInTheDocument();
  });

  test('When Login clicked, handle login function is fired', async () => {
    const login = jest.fn(() => {
      console.log('firebase login');
    });

    await act(async () => {
      render(
        <AuthProvider
          overrideValue={{
            login,
          }}
        >
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /login/i });
    expect(element).toBeInTheDocument();

    userEvent.click(element);

    expect(login).toBeCalledTimes(1);
  });

  test('When Webiii clicked, go back to home page', async () => {
    await act(async () => {
      render(
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /webiii/i });
    expect(element).toBeInTheDocument();
    userEvent.click(element);
  });

  test('When Forgot password clicked, go back to forgot password page', async () => {
    await act(async () => {
      render(
        <AuthProvider>
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByText(/forgot your password\?/i);
    expect(element).toBeInTheDocument();
    userEvent.click(element);
  });
});

describe('Sad path', () => {
  test('Firebase login fails, throw error', async () => {
    const login = jest.fn(() => {
      console.log('firebase login failed');
      throw new Error();
    });

    await act(async () => {
      render(
        <AuthProvider
          overrideValue={{
            login,
          }}
        >
          <Router>
            <Login />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /login/i });
    expect(element).toBeInTheDocument();
    userEvent.click(element);

    expect(login).toBeCalledTimes(1);
  });
});
