import 'whatwg-fetch';

const application = () => {
  const inputElements = document.querySelectorAll('input[data-autocomplete]');
  inputElements.forEach((input) => {
    const query = input.dataset.autocomplete;
    const dataAutocompleteName = input.dataset.autocompleteName;

    input.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name=${dataAutocompleteName}]`);
      const url = new URL(query, window.location.origin);
      url.searchParams.append('search', e.target.value);
      const response = await fetch(url);
      const items = await response.json();

      const options = items.length === 0 ? ['Nothing'] : items;
      list.innerHTML = options.map((item) => `<li>${item}</li>`).join('\n');
    });
  });
};
