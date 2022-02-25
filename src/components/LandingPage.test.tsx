import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { LandingPage } from './LandingPage';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom');

test('Landing Page', async () => {
  render(<LandingPage />);

  expect(
    screen.getByText(/unleashing the power of tokenomics/i)
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});

// xtest('when Sign up clicked then route to login page', async () => {
//   await act(async () => {
//     render(
//       <AuthProvider>
//         <Router>
//           <LandingPage />
//         </Router>
//       </AuthProvider>
//     );
//   });

//   userEvent.click(screen.getByRole('button', { name: /sign up/i }));
//   const element = await screen.findByLabelText(/password/i);
//   expect(element).toBeInTheDocument();
// });
