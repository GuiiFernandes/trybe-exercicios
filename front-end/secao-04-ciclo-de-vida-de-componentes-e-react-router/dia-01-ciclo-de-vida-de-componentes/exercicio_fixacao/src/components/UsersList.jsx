import { Component } from 'react';
import User from './User';
import '../css/UsersList.css';

export default class UsersList extends Component {
  state = {
    loading: true,
    users: [],
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    this.setState({ loading: true }, async () => {
      const apiUrl = 'https://api.randomuser.me/';
      const user = (await ((await fetch(apiUrl)).json())).results[0];
      this.setState(({ users }) => ({
        users: [...users, user],
        loading: false,
      }));
    });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="main-container">
        <h2 className="display-2">Usuários</h2>
        { loading ? (<p>Carregando...</p>
        ) : (
          <div className="user-list">
            { users.map((user) => (
              <User
                user={ user }
                key={ user.login.uuid }
              />
            )) }
          </div>
        ) }
        <button
          className="btn btn-primary"
          type="button"
          onClick={ this.fetchUser }
        >
          Buscar
        </button>
      </div>
    );
  }
}
