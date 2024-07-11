import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Attachments from "../Attachments";
describe("Attachments Component", () => {
  const mockOnSelect = jest.fn();
  const mockOnRemove = jest.fn();
  const mockFiles = [
    new File(["(test)"], "boy.png", { type: "image/png" }),
  ];
  const renderComponent = (props = {}) =>
    render(
      <Attachments
        label="Attach files"
        files={[]}
        onSelect={mockOnSelect}
        onRemove={mockOnRemove}
        id="file-input"
        {...props}
      />
    );
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders correctly", () => {
    renderComponent();
    expect(screen.getByText("Upload file")).toBeInTheDocument();
  });
  it("calls onSelect when a file is selected", () => {
    renderComponent();
    const input = screen.getByLabelText("Upload file");
    fireEvent.change(input, {
      target: { files: mockFiles },
    });
    expect(mockOnSelect).toHaveBeenCalledWith(mockFiles);
  });

  it("displays the selected file name", () => {
    renderComponent({ files: mockFiles });
    expect(screen.getByText("boy.png")).toBeInTheDocument();
  });

  it("calls onRemove when the remove button is clicked", () => {
    renderComponent({ files: mockFiles });
    const removeButton = screen.getByTestId("cancelButton");
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledWith(mockFiles[0]);
  });

  it("displays the label when provided", () => {
    renderComponent();
    expect(screen.getByText("Attach files")).toBeInTheDocument();
  });
});
