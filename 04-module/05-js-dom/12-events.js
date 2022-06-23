const run = () => {
  let counter = 1;
  const button = document.getElementById('alert-generator');
  const container = document.querySelector('.alerts');

  button.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-primary');
    div.textContent = `Alert ${counter}`;
    container.prepend(div);
    counter += 1;
  });
};