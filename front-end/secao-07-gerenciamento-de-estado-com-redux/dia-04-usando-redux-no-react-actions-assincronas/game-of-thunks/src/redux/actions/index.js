export const REQUEST_API = 'REQUEST_API';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const BACK = 'BACK';

export const requestAPI = () => ({ type: REQUEST_API });
export const requestSuccess = (data) => ({ type: REQUEST_SUCCESS, data });
export const requestFailed = (error) => ({ type: REQUEST_FAILED, error });
export const backAction = () => ({ type: BACK });

export const fetchAPI = (name) => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
    const data = await response.json();
    if (!data.length || !data[0].name) throw new Error('Character not found!');
    dispatch(requestSuccess(data[0]));
  } catch (error) {
    dispatch(requestFailed(error.message));
  }
};
