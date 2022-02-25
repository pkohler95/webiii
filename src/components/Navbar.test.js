import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { MemoryRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

test('renders learn react link', async () => {
  await act(async () => {
    render(
      <Router>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
      </Router>
    );
  });
  const linkElement = screen.getByText(/Webiii/i);
  expect(linkElement).toBeInTheDocument();
});

// test('when Sign up clicked then route to login page', async () => {
//   await act(async () => {
//     render(
//       <Router>
//         <AuthProvider>
//           <Navbar />
//         </AuthProvider>
//       </Router>
//     );
//   });

//   userEvent.click(screen.getByRole('button', { name: /sign up/i }));
//   const element = await screen.findByLabelText(/password/i);
//   expect(element).toBeInTheDocument();
// });
