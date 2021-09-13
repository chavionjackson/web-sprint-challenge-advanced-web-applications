import React from "react";
import MutationObserver from "mutationobserver-shim";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

const noColor = [];

const testColor = {
  color: "blue",
  code: { hex: "#7fffd4" },
  id: 1,
};

test("Renders an empty list of colors without errors", () => {
  render(<ColorList color={noColor} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColor} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  render(<ColorList color={testColor} />);
  const toggleEdit = jest.fn();
  let editing = screen.queryByTestId("color");

  userEvent.click(editing);

  expect(toggleEdit).toBeCalled();
});
