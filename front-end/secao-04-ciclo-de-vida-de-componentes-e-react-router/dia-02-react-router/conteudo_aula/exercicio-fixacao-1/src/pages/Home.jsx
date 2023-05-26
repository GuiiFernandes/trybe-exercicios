import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  state = {
    userName: 'Tryber',
    role: 'Admin',
  };

  render() {
    const { history } = this.props;
    return (
      <>
        <h1>Home Page</h1>
        <button
          type="button"
          onClick={ () => history.push('/welcome', this.state) }
        >
          Acesse a página de Boas-Vindas
        </button>
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
