import './style.css';
import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
const data = (URL) => fetch(URL)
  .then((response) => response)
  .then(((dataObj) => dataObj.json()))
  .catch((error) => {
    fillErrorMessage(error.message);
  });

const { users } = await data(`${USERS_API}/users`);

fillUsersSelect(users);
usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  fetch(`${USERS_API}/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
    .then(({ posts }) => {
      const num = -1;
      fillPosts(posts);
      return posts.at(num).id;
    })
    .then((postId) => {
      fetch(`${USERS_API}/posts/${postId}/comments`)
        .then((response) => response.json())
        .then(({ comments }) => {
          fillFeaturedPostComments(comments);
        });
    })
    .catch((error) => {
      fillErrorMessage(error.message);
    });
});
