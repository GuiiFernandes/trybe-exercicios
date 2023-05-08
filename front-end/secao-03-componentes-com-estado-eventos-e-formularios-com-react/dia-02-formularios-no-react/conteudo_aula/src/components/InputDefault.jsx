import { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputDefault extends Component {
  render() {
    const { text, id, placeholder, value, handleChange } = this.props;
    return (
      <fieldset className="input-group mb-3">
        <label className="input-group-text" htmlFor="name">{ text }</label>
        <input
          type="text"
          className="form-control"
          id={ id }
          placeholder={ placeholder }
          name={ id }
          value={ value }
          onChange={ handleChange }
        required/>
      </fieldset>
    )
  }
}

InputDefault.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
