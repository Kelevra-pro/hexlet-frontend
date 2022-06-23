const extractData = (document) => {
  const bodyChildren = Array.from(document.parentNode.body.children);
  return bodyChildren
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim());
};

// NOTE: Test only in browser environment
const result = extractData(document.documentElement);
console.log(result);
