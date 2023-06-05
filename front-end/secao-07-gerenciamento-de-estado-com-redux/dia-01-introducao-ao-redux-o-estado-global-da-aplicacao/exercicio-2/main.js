import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import './style.css';

const INITIAL_STATE = {
  status: 'Offline',
  theme: 'light',
};

const actions = ['CHANGE_THEME', 'CHANGE_STATUS'];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_THEME':
    return {
      ...state,
      theme: state.theme === 'dark' ? 'light' : 'dark',
    };
  case 'CHANGE_STATUS':
    return {
      ...state,
      status: state.status === 'Online' ? 'Offline' : 'Online',
    };
  default:
    return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const handleChange = (type) => {
  store.dispatch({ type });
};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
  handleChange(actions[0]);
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
  handleChange(actions[1]);
});

store.subscribe(() => {
  const { status, theme } = store.getState();
  const statusBtn = document.getElementById('toggle-status');
  const themeBtn = document.getElementById('toggle-theme');
  const statusText = document.getElementById('status');
  const container = document.getElementById('container');
  statusBtn.innerHTML = `Ficar ${status === 'Online' ? 'Offline' : 'Online'}`;
  themeBtn.innerHTML = `${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
  statusText.innerHTML = status;
  statusText.className = status.toLowerCase();
  container.className = theme;
});
