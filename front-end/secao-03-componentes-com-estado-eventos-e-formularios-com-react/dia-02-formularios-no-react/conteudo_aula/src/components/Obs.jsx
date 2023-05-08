import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Obs extends Component {
  render() {
    const { obs, countRestChar, handleChange } = this.props
    return (
      <fieldset className="input-group mb-3">
        <span className="input-group-text">Obs.:</span>
        <textarea
          name="obs"
          className="form-control"
          placeholder="Descreva aqui as observações relevantes sobre o seu pet. (Ex.: alergias, caroços, medos, necessidades especiais.)"
          aria-label="Observação"
          maxLength="300"
          value={ obs }
          onChange={ handleChange }
        >
        </textarea>
        <span className="count-characters">caractéres restantes: { countRestChar() }</span>
      </fieldset>
    )
  }
}

Obs.propTypes = {
  obs: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  countRestChar: PropTypes.func.isRequired,
};
