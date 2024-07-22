import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxGroup from '.';
const mockOnChange = jest.fn();
const options = [
  { value: 'option1', label: 'Option 1', checked: true },
  { value: 'option2', label: 'Option 2', checked: false },
  { value: 'option3', label: 'Option 3', checked: false },
];
describe('CheckboxGroup Component', () => {
  it('renders CheckboxGroup component without crashing', () => {
    render(
      <CheckboxGroup
        options={options}
        onChange={mockOnChange}
        groupName="Test Group"
      />
    );
  });

  it('renders checkboxes based on options', () => {
    const { getByLabelText } = render(
      <CheckboxGroup
        options={options}
        onChange={mockOnChange}
        groupName="Test Group"
      />
    );

    options.forEach((option) => {
      const checkbox = getByLabelText(option.label);
      expect(checkbox).toBeInTheDocument();
    });
  });

  it('handles checkbox selection correctly', () => {
    const { getByLabelText } = render(
      <CheckboxGroup
        options={options}
        onChange={mockOnChange}
        groupName="Test Group"
      />
    );
    const checkbox2 = getByLabelText('Option 2');
    fireEvent.click(checkbox2);
    setTimeout(() => {
      expect(mockOnChange).toHaveBeenCalledWith({
        option1: true,
        option2: true,
        option3: false,
      });
    }, 0);
  });
});
