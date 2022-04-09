import { htmlEscape } from 'escape-goat';

const render = (element, data) => {
  const div = document.createElement('div');
  const sendText = 'Feedback has been sent';
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>${sendText}</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  `;
  element.replaceWith(div);
};

const run = () => {
  const formElement = document.querySelector('.feedback-form');
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(formElement, Object.fromEntries(formData));
  };

  formElement.addEventListener('submit', handleForm);
};
