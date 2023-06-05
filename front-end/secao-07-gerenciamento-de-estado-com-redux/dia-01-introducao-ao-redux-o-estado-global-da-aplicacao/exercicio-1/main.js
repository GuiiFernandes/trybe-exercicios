import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import './style.css';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const actions = ['PREVIOUS_COLOR', 'NEXT_COLOR', 'RANDOM_COLOR'];

const randomColor = () => {
  const codeColor = 255;
  const random = () => Math.floor(Math.random() * codeColor);
  return `rgb(${random()}, ${random()}, ${random()})`;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'NEXT_COLOR':
    return {
      ...state,
      index: (state.index + 1) % state.colors.length,
    };
  case 'PREVIOUS_COLOR':
    return {
      ...state,
      index: (state.index - 1 + state.colors.length) % state.colors.length,
    };
  case 'RANDOM_COLOR':
    return {
      colors: [...state.colors, randomColor()],
      index: state.colors.length,
    };
  default:
    return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

document.addEventListener('click', ({ target: { id } }) => {
  if (id === 'previous') store.dispatch({ type: actions[0] });
  if (id === 'next') store.dispatch({ type: actions[1] });
  if (id === 'random') store.dispatch({ type: actions[2] });
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  const value = document.querySelector('#value');
  const container = document.querySelector('#container');
  value.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
  container.style.color = index === 1 ? 'white' : 'black';
});
