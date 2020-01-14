import { EmailsEditor } from "./components/EmailEditor";

import "./components/EmailEditor";

interface IEmailsEditorOptions {
  container: HTMLElement;
}

(window as any).EmailsEditor = ({
  container
}: IEmailsEditorOptions): EmailsEditor => {
  const ee = document.createElement("emails-editor") as EmailsEditor;
  container.appendChild(ee);

  return ee;
};
