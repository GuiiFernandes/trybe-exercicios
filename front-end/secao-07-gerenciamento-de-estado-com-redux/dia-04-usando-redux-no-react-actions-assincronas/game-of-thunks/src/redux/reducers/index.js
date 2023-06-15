import { REQUEST_API, REQUEST_SUCCESS, REQUEST_FAILED, BACK } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  data: {},
  defaultImg: true,
  error: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state,
      isLoading: true,
      defaultImg: true };
  case REQUEST_SUCCESS:
    return { ...state,
      isLoading: false,
      data: action.data,
      error: '',
      defaultImg: false };
  case REQUEST_FAILED:
    return { ...state,
      isLoading: false,
      data: {},
      defaultImg: true,
      error: action.error };
  case BACK:
    return { ...state,
      isLoading: false,
      defaultImg: true,
      data: {},
      error: '' };
  default:
    return state;
  }
};

export default reducer;
