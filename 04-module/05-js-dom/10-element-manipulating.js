import camelCase from "lodash/camelCase";

const normalize = (document) => {
  const allNodes = [...document.body.getElementsByTagName('*')];
  allNodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};
