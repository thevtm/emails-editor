import React from "react";
import { action } from "@storybook/addon-actions";

import { EmailBlock } from "../components/EmailBlock";

export default {
  title: "Email Block",
  component: EmailBlock
};

export const John = () => (
  <EmailBlock email="john@miro.com" onClickRemove={action("remove email")} />
);
