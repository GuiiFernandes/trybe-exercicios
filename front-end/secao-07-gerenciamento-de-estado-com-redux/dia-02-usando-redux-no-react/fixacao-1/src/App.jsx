import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HelpSeiya from './components/HelpSeiya';
import { getCosmo } from './redux/actions';
import SeiyaVideo from './components/SeiyaVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    const { dispatch, cosmo } = this.props;
    const showProgress = `${cosmo} %` || '0 %';
    const fullPower = 100;

    if (cosmo === fullPower) {
      return (
        <div className="seiya-background">
          <SeiyaVideo />
        </div>
      );
    }
    return (
      <div className="seiya-background">
        <HelpSeiya />
        <p className="important">
          Seiya precisa da sua ajuda para conseguir derrotar Saga.
        </p>
        <div>
          <span>{showProgress}</span>
          <button
            type="button"
            className="btn btn-info"
            onClick={ () => dispatch(getCosmo()) }
          >
            Empreste seu cosmo
          </button>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cosmo: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cosmo: state.cosmo,
});

export default connect(mapStateToProps)(App);
