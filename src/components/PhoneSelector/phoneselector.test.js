import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { PhoneSelector } from '../PhoneSelector';
describe('PhoneSelector component', () => {
  it('renders label and input field', () => {
    const { getByText, getByRole } = render(
      <PhoneSelector label="Phone Number" defaultCountry="US" />
    );
    expect(getByText('Phone Number')).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with default country code', () => {
    const { getByDisplayValue } = render(<PhoneSelector defaultCountry="US" />);

    expect(getByDisplayValue('+1')).toBeInTheDocument();
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <PhoneSelector value="+91 1234567890" onChange={onChange} />
    );

    const inputField = getByRole('textbox');
    fireEvent.change(inputField, { target: { value: '+91 9876543210' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('+91 9876543210');
  });

  it('updates input value when props value changes', () => {
    const { getByDisplayValue, rerender } = render(
      <PhoneSelector value="+91 1234567890" />
    );

    expect(getByDisplayValue('+91 1234567890')).toBeInTheDocument();

    rerender(<PhoneSelector value="+91 9876543210" />);

    expect(getByDisplayValue('+91 9876543210')).toBeInTheDocument();
  });

  it('renders with custom class name', () => {
    const { getByClassName } = render(
      <PhoneSelector label="Phone Number" className="custom-class" />
    );

    expect(getByClassName('custom-class')).toBeInTheDocument();
  });
});