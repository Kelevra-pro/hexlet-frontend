const extractData = (document) => {
  const content = document.querySelector('.content');

  const titleElement = content.querySelector('h1');
  const title = titleElement.innerHTML;

  const descriptionElement = content.querySelector('.description');
  const description = descriptionElement.innerHTML;

  const itemsElements = document.querySelectorAll('.links div');
  const items = Array.from(itemsElements).map((element) => {
    const itemTitleElement = element.querySelector('a');
    const itemDescriptionElement = element.querySelector('p');

    return {
      title: itemTitleElement.innerHTML,
      description: itemDescriptionElement.innerHTML,
    };
  });

  return {
    title,
    description,
    items,
  };
};

// NOTE: Test only in browser environment
const result = extractData(document.documentElement);
console.log(result);
