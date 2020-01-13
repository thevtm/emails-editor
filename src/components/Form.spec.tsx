import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Form } from "./Form";

test("loads and displays greeting", async () => {
  const { getByText, getByRole } = render(<Form />);

  const addEmailButton = getByText("Add email");

  expect(addEmailButton).toBeDefined();
});
