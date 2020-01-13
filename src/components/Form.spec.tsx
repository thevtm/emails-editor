import React from "react";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Form } from "./Form";

test(`By clicking "​Add email​" button a random email should be added to the list.`, () => {
  const { getByTestId, queryAllByTestId } = render(<Form />);

  const addEmailButton = getByTestId("form-button-add-email");

  expect(queryAllByTestId("email-pill")).toHaveLength(0);

  fireEvent.click(addEmailButton);

  expect(queryAllByTestId("email-pill")).toHaveLength(1);

  fireEvent.click(addEmailButton);
  fireEvent.click(addEmailButton);
  fireEvent.click(addEmailButton);

  expect(queryAllByTestId("email-pill")).toHaveLength(4);
});
