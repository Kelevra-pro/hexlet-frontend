const render = (state, element) => {
  const elementName = element.dataset.editableTarget;
  element.innerHTML = '';

  const buildText = () => {
    if (state.value === '') {
      const i = document.createElement('i');
      i.textContent = elementName;

      return i;
    }

    return document.createTextNode(state.value);
  };

  const buildForm = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', elementName);
    input.setAttribute('value', state.value);
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Save');
    form.append(input, submit);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      state.value = formData.get(elementName).trim();
      state.mode = 'text';

      render(state, element);
    });

    return { form, input };
  };

  switch (state.mode) {
    case 'text': {
      const text = buildText();
      element.append(text);
      break;
    }
    case 'form': {
      const { form, input } = buildForm();
      element.append(form);
      input.select();
      break;
    }
    default: {
      throw new Error(`Unknown mode: ${state.mode}`);
    }
  }
};

const app = () => {
  const elements = document.querySelectorAll('[data-editable-target]');

  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };

    element.addEventListener('click', () => {
      if (state.mode === 'text') {
        state.mode = 'form';
        render(state, element);
      }
    });

    render(state, element);
  });
};

export default app;
// app();
