import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

import { Form } from "./Form";

describe(`Email block should be created by`, () => {
  test(`pressing Enter.`, async () => {
    const { getByTestId, queryAllByTestId, getByText } = render(<Form />);

    const sampleEmail = "john@miro.com";

    expect(queryAllByTestId("email-block")).toHaveLength(0);

    const formInput = getByTestId("form-input");
    await userEvent.type(formInput, sampleEmail);
    fireEvent.keyPress(formInput, { key: "Enter", charCode: 13 });

    expect(queryAllByTestId("email-block")).toHaveLength(1);
    expect(getByText(sampleEmail)).toBeDefined();
  });

  test(`pressing Comma.`, async () => {
    const { getByTestId, queryAllByTestId, getByText } = render(<Form />);

    const sampleEmail = "john@miro.com";

    expect(queryAllByTestId("email-block")).toHaveLength(0);

    const formInput = getByTestId("form-input");
    await userEvent.type(formInput, sampleEmail);
    await userEvent.type(formInput, ",");

    expect(queryAllByTestId("email-block")).toHaveLength(1);
    expect(getByText(sampleEmail)).toBeDefined();
  });

  test(`losing focus on the input field.`, async () => {
    const { getByTestId, queryAllByTestId, getByText } = render(<Form />);

    const sampleEmail = "john@miro.com";

    expect(queryAllByTestId("email-block")).toHaveLength(0);

    const formInput = getByTestId("form-input");
    await userEvent.type(formInput, sampleEmail);
    fireEvent.blur(formInput);

    expect(queryAllByTestId("email-block")).toHaveLength(1);
    expect(getByText(sampleEmail)).toBeDefined();
  });
});

test(`By clicking "​Add email​" button a random email should be added to the list.`, () => {
  const { getByTestId, queryAllByTestId } = render(<Form />);

  expect(queryAllByTestId("email-block")).toHaveLength(0);

  const addEmailButton = getByTestId("form-button-add-email");
  fireEvent.click(addEmailButton);

  expect(queryAllByTestId("email-block")).toHaveLength(1);
});
