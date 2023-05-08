import { Component } from 'react';
import InputDefault from './InputDefault';
import Sex from './Sex';
import Obs from './Obs';
import Term from './Term';
import '../css/Form.css';

export default class Form extends Component {
  state = {
    name: '',
    tutor: '',
    sex: 'Selecione...',
    obs: '',
    acceptTerm: false,
  };

  countRestChar = () => {
    const { obs } = this.state;
    return 300 - obs.length;
  }

  changeBackground = () => {
    const { acceptTerm } = this.state;
    return acceptTerm ? 'validCheck' : 'invalidCheck';
  }

  disabledButton = () => {
    const { name, tutor, sex, acceptTerm } = this.state;
    const sexIsSelec = sex !== 'Selecione...';
    return (name && tutor && acceptTerm && sexIsSelec)
  }

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const endValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: endValue,
    });
  };

  render() {
    const { sex, obs, acceptTerm } = this.state;
    const inputAttributes = [
      { id: 'name', placeholder: 'Nome do Pet', text: 'Pet' },
      { id: 'tutor', placeholder: 'Nome do Tutor', text: 'Tutor' },
    ];
    return (
      <form className="App">
      <h2 className="Display-2">Dados do pet:</h2>
      {
        inputAttributes.map(({ id, placeholder, text }) => (<InputDefault
          text={ text }
          id={ id }
          placeholder={ placeholder }
          value={ this.state[id] }
          handleChange={ this.handleChange }
          key={ id }
        />))
      }
      <Sex sex= { sex } handleChange={ this.handleChange } />
      <Obs obs= { obs } handleChange={ this.handleChange } countRestChar={ this.countRestChar } />
      <Term acceptTerm={ acceptTerm } handleChange={ this.handleChange } changeBackground={ this.changeBackground } />
      <button type="submit" disabled={ !this.disabledButton() } className="btn btn-success">Enviar</button>
    </form>
    )
  }
}
