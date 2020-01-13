import React from "react";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Form } from "./Form";

test(`By clicking "​Add email​" button a random email should be added to the list.`, () => {
  const { getByTestId, queryAllByTestId } = render(<Form />);

  expect(queryAllByTestId("email-block")).toHaveLength(0);

  const addEmailButton = getByTestId("form-button-add-email");
  fireEvent.click(addEmailButton);

  expect(queryAllByTestId("email-block")).toHaveLength(1);
});
