import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PhoneSelector from "./index";

describe("PhoneSelector component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<PhoneSelector label="Phone Number" />);

    expect(getByTestId("mock-mui-tel-input")).toBeInTheDocument();
  });

  it("handles onChange event correctly", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <PhoneSelector label="Phone Number" onChange={handleChange} />
    );

    const input = getByTestId("mock-mui-tel-input");

    fireEvent.change(input, { target: { value: "1234567890" } });

    expect(handleChange).toHaveBeenCalledWith("1234567890");
  });
  it("renders without label", () => {
    const { queryByText } = render(<PhoneSelector />);

    expect(queryByText("Phone Number")).toBeNull();
  });
});
