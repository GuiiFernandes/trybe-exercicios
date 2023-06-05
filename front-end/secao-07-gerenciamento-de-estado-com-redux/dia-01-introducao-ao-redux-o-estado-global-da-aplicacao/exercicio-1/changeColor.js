import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

export const changeColor = () => {
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
    default:
      return state;
    }
  };

  const store = createStore(reducer, composeWithDevTools());

  const buttons = document.querySelectorAll('button');
  buttons.addEventListener('click', ({ target: { id } }) => {
    if (id === 'previous') store.dispatch({ type: 'PREVIOUS_COLOR' });
    if (id === 'next') store.dispatch({ type: 'NEXT_COLOR' });
  });

  store.subscribe(() => {
    const { colors, index } = store.getState();
    const value = document.querySelector('#value');
    value.innerHTML = colors[index];
  });
};
