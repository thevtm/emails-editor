export const htmlToElement = (html: string): HTMLElement => {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;

  if (template.content.firstChild === null) {
    throw new Error("Unable to transform html into an element!");
  }

  return template.content.firstChild! as HTMLElement;
};

export const htmlToElements = (html: string): NodeListOf<ChildNode> => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
};
