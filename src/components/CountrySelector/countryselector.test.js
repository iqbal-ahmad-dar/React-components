import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CountrySelector from "../CountrySelector";
import { countriesList } from "../CountrySelector/countriesList";
describe("CountrySelector Component", () => {
  const onChangeMock = jest.fn();
  const defaultCountry = countriesList[103];
  const renderComponent = (props = {}) => {
    return render(
      <CountrySelector
        label="Select Country"
        onChange={onChangeMock}
        defaultCountry={defaultCountry}
        {...props}
      />
    );
  };
  beforeEach(() => {
    onChangeMock.mockClear();
  });
  test("renders correctly", () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
  test("displays the label when provided", () => {
    renderComponent();
    expect(screen.getByText("Select Country")).toBeInTheDocument();
  });
  test("displays the default country", () => {
    renderComponent();
    expect(screen.getByText(defaultCountry.name)).toBeInTheDocument();
  });
  test("opens the dropdown on click", () => {
    renderComponent();
    const formControl = screen.getByText(defaultCountry.name).parentElement
      .parentElement;
    fireEvent.click(formControl);
    expect(screen.getByText(countriesList[0].name)).toBeInTheDocument();
  });
  test("closes the dropdown when clicking outside", () => {
    renderComponent();
    const formControl = screen.getByText(defaultCountry.name).parentElement
      .parentElement;
    fireEvent.click(formControl);
    fireEvent.mouseDown(document);
    expect(screen.queryByText(countriesList[0].name)).not.toBeInTheDocument();
  });
});
