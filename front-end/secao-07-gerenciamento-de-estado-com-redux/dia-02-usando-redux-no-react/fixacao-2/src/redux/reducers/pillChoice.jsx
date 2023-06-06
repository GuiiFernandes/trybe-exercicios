const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  // implemente aqui
  case 'UNDERSTAND_MATRIX':
    return {
      ...state,
      id: payload,
    };
  default:
    return state;
  }
};

export default selectedPill;
