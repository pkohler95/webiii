import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { Signup } from '../components/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Happy path', () => {
  test('Render Login', async () => {
    await act(async () => {
      render(
        <AuthProvider overrideValue={{}}>
          <Router>
            <Signup />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /sign up/i });

    expect(element).toBeInTheDocument();
  });

  test('When Login clicked, handle login function is fired', async () => {
    const signUp = jest.fn(() => {
      console.log('firebase sign up');
    });

    await act(async () => {
      render(
        <AuthProvider
          overrideValue={{
            signUp,
          }}
        >
          <Router>
            <Signup />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /sign up/i });
    expect(element).toBeInTheDocument();

    userEvent.click(element);

    expect(signUp).toBeCalledTimes(1);
  });

  test('When Webiii clicked, go back to home page', async () => {
    await act(async () => {
      render(
        <AuthProvider overrideValue={{}}>
          <Router>
            <Signup />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /webiii/i });
    expect(element).toBeInTheDocument();
    userEvent.click(element);
  });
});

describe('Sad path', () => {
  test('Firebase sign up fails, throw error', async () => {
    const signUp = jest.fn(() => {
      console.log('firebase sign up failed');
      throw new Error();
    });

    await act(async () => {
      render(
        <AuthProvider
          overrideValue={{
            signUp,
          }}
        >
          <Router>
            <Signup />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /sign up/i });
    expect(element).toBeInTheDocument();
    userEvent.click(element);

    expect(signUp).toBeCalledTimes(1);
  });
});
