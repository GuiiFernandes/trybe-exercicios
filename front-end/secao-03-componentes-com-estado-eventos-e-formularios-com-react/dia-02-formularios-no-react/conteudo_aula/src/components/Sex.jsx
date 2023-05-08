import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sex extends Component {
  render() {
    const { sex, handleChange } = this.props;
    return (
      <fieldset className="input-group mb-3">
        <label className="input-group-text" htmlFor="sex">Sexo</label>
        <select
          className="form-select"
          value={ sex }
          id="sex"
          name="sex"
          onChange={ handleChange }
        required>
          <option>Selecione...</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </fieldset>
    )
  }
}

Sex.propTypes = {
  sex: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
