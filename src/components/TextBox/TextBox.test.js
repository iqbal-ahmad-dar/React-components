import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextBox from './index';

describe('TextBox component', () => {
  it('renders correctly with default props', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <TextBox
        id="test-input"
        label="Test Input"
        value=""
        onChange={() => {}}
        placeholder="Enter text"
      />
    );

    expect(getByLabelText('Test Input')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('displays validation error for invalid email', () => {
    const { getByLabelText, getByText } = render(
      <TextBox
        id="email-input"
        label="Email Input"
        value=""
        onChange={() => {}}
        placeholder="Enter your email"
        type="email"
      />
    );

    const input = getByLabelText('Email Input');
    fireEvent.change(input, { target: { value: 'email@gmail' } });
    expect(getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('displays validation error for invalid password', () => {
    const { getByLabelText, getByText } = render(
      <TextBox
        id="password-input"
        label="Password Input"
        value=""
        onChange={() => {}}
        placeholder="Enter your password"
        type="password"
      />
    );
    const input = getByLabelText('Password Input');
    fireEvent.change(input, { target: { value: 'best@123' } });
    expect(
      getByText(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      )
    ).toBeInTheDocument();
  });
});
