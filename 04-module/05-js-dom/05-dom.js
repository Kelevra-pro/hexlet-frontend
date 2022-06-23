const text = document.body.innerHTML
  .trim()
  .split('\n')
  .map((item) => `<p>${item}</p>`)
  .join('\n');

document.body.innerHTML = text;
