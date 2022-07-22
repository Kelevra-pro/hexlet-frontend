import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

const getTasks = async () => {
  const response = await axios.get(routes.tasksPath());
  return response.data.items;
};

const setTask = async (data) => {
  await axios.post(routes.tasksPath(), data);
  return data;
};

const render = (state, formEl, inputEl, tasksEl) => {
  formEl.reset();
  inputEl.focus();
  const tasksList = state.tasks.map((task) => {
    const liEl = document.createElement('li');
    liEl.className = 'list-group-item';
    liEl.textContent = task.name;

    return liEl;
  });

  tasksEl.replaceChildren(...tasksList);
};

const app = async () => {
  const tasks = await getTasks().then((taskList) => taskList);

  const state = {
    tasks,
  };

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input');
  const tasksEl = document.querySelector('#tasks');

  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
    };
    state.tasks.unshift(data);
    await setTask(data);

    render(state, formEl, inputEl, tasksEl);
  });

  render(state, formEl, inputEl, tasksEl);
};

export default app;
