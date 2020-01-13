import React from "react";
import { action } from "@storybook/addon-actions";

import { EmailPill } from "../components/EmailPill";

export default {
  title: "Email Pill",
  component: EmailPill
};

export const John = () => (
  <EmailPill email="john@miro.com" onClickRemove={action("remove email")} />
);
