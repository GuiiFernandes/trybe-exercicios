export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  return (dispatch) => {
    dispatch(requestAPI());
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((data) => dispatch(getPicture(data[0].url)));
  };
}
