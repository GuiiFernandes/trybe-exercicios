import { Component } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  state = {
    email: '',
    saveEmail: '',
  };

  changeEmail = ({ target: { value } }) => {
    this.setState({ email: value });
  };

  changeSaveEmail = () => {
    this.setState((prevState) => ({ saveEmail: prevState.email, email: '' }));
  };

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ this.changeEmail }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ this.changeSaveEmail }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
