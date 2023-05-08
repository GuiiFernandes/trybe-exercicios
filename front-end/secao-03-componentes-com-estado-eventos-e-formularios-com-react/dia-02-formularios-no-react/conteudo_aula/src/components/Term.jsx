import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Term extends Component {
  render() {
    const { acceptTerm, handleChange, changeBackground } = this.props;
    return (
      <fieldset className={ `form-check form-switch ${ changeBackground()}` }>
        <input
          className="form-check-input"
          type="checkbox" role="switch"
          id="acceptTerm"
          name="acceptTerm"
          checked= { acceptTerm }
          onChange={ handleChange }
        />
        <label className="form-check-label" htmlFor="acceptTerm">
          Declaro estar ciente que meu pet precisa estar com as vacinas e remédio(s) de parasita(s) em dia, e que não cumprir esses requisitos traz risco ao cuidado e possibilidade de cancelamento do agendamento sem aviso prévio.
        </label>
      </fieldset>
    )
  }
}

Term.propTypes = {
  acceptTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  changeBackground: PropTypes.func.isRequired,
};
