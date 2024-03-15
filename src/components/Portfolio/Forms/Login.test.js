/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test.skip('renders username and password input fields', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const renderResult = render(<Login />);
    const usernameInput = renderResult.getByPlaceholderText('Username');
    const passwordInput = renderResult.getByPlaceholderText('Password');
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test.skip('updates username and password state on input change', () => {
    const renderResult = render(<Login />);
    const usernameInput = renderResult.getByPlaceholderText('Username');
    const passwordInput = renderResult.getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });

  test.skip('displays "Login Successful!" message on successful login', () => {
    const renderResult = render(<Login />);
    const usernameInput = renderResult.getByPlaceholderText('Username');
    const passwordInput = renderResult.getByPlaceholderText('Password');
    const signInButton = renderResult.getByText('Sign in');

    fireEvent.change(usernameInput, { target: { value: 'validuser' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });
    fireEvent.click(signInButton);

    const successMessage = renderResult.getByText('Login Successful!');
    expect(successMessage).toBeInTheDocument();
  });

  test.skip('does not display "Login Successful!" message on unsuccessful login', () => {
    const renderResult = render(<Login />);
    const signInButton = renderResult.getByText('Sign in');

    fireEvent.click(signInButton);

    const successMessage = renderResult.queryByText('Login Successful!');
    expect(successMessage).not.toBeInTheDocument();
  });
});
