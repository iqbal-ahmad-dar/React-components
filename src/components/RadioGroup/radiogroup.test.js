import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RadioGroup from "../RadioGroup";
jest.mock(
  "../RadioButton/index",
  () =>
    ({ id, name, label, checked, onChange, disabled }) =>
      (
        <div>
          <input
            type="radio"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          {label && <label htmlFor={id}>{label}</label>}
        </div>
      )
);
describe("RadioGroup Component", () => {
  const options = [
    { value: "option1", label: "Option 1", selected: true },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3", disabled: true },
    { value: "option4", label: "Option 4" },
  ];
  it("renders the RadioGroup component correctly", () => {
    const { getByLabelText } = render(
      <RadioGroup
        type="vertical"
        options={options}
        name="exampleRadioGroup"
        onChange={() => {}}
        headingLabel="Choose an Option"
      />
    );

    expect(getByLabelText("Option 1")).toBeInTheDocument();
    expect(getByLabelText("Option 2")).toBeInTheDocument();
    expect(getByLabelText("Option 3")).toBeInTheDocument();
    expect(getByLabelText("Option 4")).toBeInTheDocument();
  });

  it("checks the default selected option", () => {
    const { getByLabelText } = render(
      <RadioGroup
        type="vertical"
        options={options}
        name="exampleRadioGroup"
        onChange={() => {}}
        headingLabel="Choose an Option"
      />
    );

    expect(getByLabelText("Option 1")).toBeChecked();
    expect(getByLabelText("Option 2")).not.toBeChecked();
    expect(getByLabelText("Option 3")).not.toBeChecked();
    expect(getByLabelText("Option 4")).not.toBeChecked();
  });

  it("handles radio selection change correctly", () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup
        type="vertical"
        options={options}
        name="exampleRadioGroup"
        onChange={mockOnChange}
        headingLabel="Choose an Option"
      />
    );

    const radio2 = getByLabelText("Option 2");
    fireEvent.click(radio2);
    expect(mockOnChange).toHaveBeenCalledWith("option2");
    expect(radio2).toBeChecked();

    const radio1 = getByLabelText("Option 1");
    expect(radio1).not.toBeChecked();
  });

  it("renders the heading label correctly", () => {
    const { getByText } = render(
      <RadioGroup
        type="vertical"
        options={options}
        name="exampleRadioGroup"
        onChange={() => {}}
        headingLabel="Choose an Option"
      />
    );

    expect(getByText("Choose an Option")).toBeInTheDocument();
  });

  it("disables the correct radio options", () => {
    const { getByLabelText } = render(
      <RadioGroup
        type="vertical"
        options={options}
        name="exampleRadioGroup"
        onChange={() => {}}
        headingLabel="Choose an Option"
      />
    );

    expect(getByLabelText("Option 3")).toBeDisabled();
  });
});
