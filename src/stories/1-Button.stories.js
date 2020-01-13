import React from "react";
import { action } from "@storybook/addon-actions";

import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button
};

export const AddEmail = () => (
  <Button onClick={action("clicked")}>Add email</Button>
);
