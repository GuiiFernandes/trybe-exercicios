import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Matrix from './components/Matrix';
import Gif from './components/Gif';

class App extends React.Component {
  render() {
    const { pill } = this.props;

    return (
      <div className="matrix-background">{pill ? <Gif /> : <Matrix />}</div>
    );
  }
}

App.propTypes = {
  pill: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  pill: state.id,
});

export default connect(mapStateToProps)(App);
