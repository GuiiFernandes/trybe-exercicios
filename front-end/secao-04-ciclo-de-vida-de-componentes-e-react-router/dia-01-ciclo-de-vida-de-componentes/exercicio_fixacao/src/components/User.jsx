import PropTypes from 'prop-types';
import { Component } from 'react';
import '../css/User.css';

export default class User extends Component {
  render() {
    const { user: { name: { title, first, last },
      location: { street: { name, number }, city, state, country },
      email,
      dob: { age },
      cell,
      picture: { large } } } = this.props;
    return (
      <div className="user-profile">
        <img src={ large } alt="user face" />
        <div className="user-data">
          <h3 className="display-4">{ `${title} ${first} ${last},` }</h3>
          <p>{ `Residente em ${name}, ${number} - ${city}-${state} / ${country},` }</p>
          <p>{ `${age} anos.` }</p>
          <p>{ `Pode ser contatado(a) pelo e-mail ${email} e celular ${cell}` }</p>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    location: PropTypes.shape({
      street: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      }),
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    email: PropTypes.string.isRequired,
    dob: PropTypes.shape({
      age: PropTypes.number.isRequired,
    }),
    cell: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
