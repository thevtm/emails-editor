const { EmailsEditor } = require("./components/EmailEditor");

interface IEmailsEditorOptions {
  container: HTMLElement;
}

module.exports = ({ container }: IEmailsEditorOptions): EmailsEditor => {
  const ee = document.createElement("emails-editor") as EmailsEditor;
  container.appendChild(ee);

  return ee;
};
