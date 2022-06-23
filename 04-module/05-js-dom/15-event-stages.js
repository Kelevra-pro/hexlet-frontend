const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

const application = () => {
  const playField = generateField();

  let currentSymbol = 'x';
  const switchPlayer = () => {
    currentSymbol = currentSymbol === 'x' ? 'o' : 'x';
  };

  const game = (e) => {
    const { target } = e;
    if (target.textContent === 's') {
      e.target.textContent = currentSymbol;
    }
    switchPlayer();
  };

  playField.addEventListener('click', (e) => game(e));

  const root = document.querySelector('.root');
  root.append(playField);
};
