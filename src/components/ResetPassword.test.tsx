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
import { ResetPassword } from './ResetPassword';

describe('Happy path', () => {
  test('Render Login', async () => {
    await act(async () => {
      render(
        <AuthProvider overrideValue={{}}>
          <Router>
            <ResetPassword />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /send reset email/i });

    expect(element).toBeInTheDocument();
  });

  test('When "send reset email" clicked, handle reset function is fired', async () => {
    const resetPassword = jest.fn(() => {
      console.log('firebase sign up');
    });

    await act(async () => {
      render(
        <AuthProvider
          overrideValue={{
            resetPassword,
          }}
        >
          <Router>
            <ResetPassword />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /send reset email/i });
    expect(element).toBeInTheDocument();

    userEvent.click(element);

    expect(resetPassword).toBeCalledTimes(1);
  });

  test('When Webiii clicked, go back to home page', async () => {
    await act(async () => {
      render(
        <AuthProvider overrideValue={{}}>
          <Router>
            <ResetPassword />
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
    const resetPassword = jest.fn(() => {
      console.log('firebase sign up failed');
      throw new Error();
    });

    await act(async () => {
      render(
        <AuthProvider
          overrideValue={{
            resetPassword,
          }}
        >
          <Router>
            <ResetPassword />
          </Router>
        </AuthProvider>
      );
    });

    const element = screen.getByRole('button', { name: /send reset email/i });
    expect(element).toBeInTheDocument();
    userEvent.click(element);

    expect(resetPassword).toBeCalledTimes(1);
  });
});
