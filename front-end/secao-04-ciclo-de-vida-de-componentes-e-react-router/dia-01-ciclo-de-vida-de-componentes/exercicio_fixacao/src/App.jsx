import { Component } from 'react';
import UsersList from './components/UsersList';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <>
        <header className="title-container">
          <h1 className="display-1 my-3">Usuários Cadastrados</h1>
        </header>
        <UsersList />
      </>
    );
  }
}

export default App;
