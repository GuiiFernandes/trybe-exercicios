import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loading from './img/loading.gif';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    const { isLoading, defaultImg } = this.props;
    return (
      <div className="container">
        <h1 className="title">Game of Thunks</h1>
        {isLoading ? (
          <h2 className="loading-title">
            Loading
            {' '}
            <img src={ loading } alt="loading" className="loading-gif" />
          </h2>
        ) : (
          <Search />
        )}
        { defaultImg && (<img src="https://media.tenor.com/GjhTXlV9HqoAAAAC/throne-game-of-thrones.gif" className="default-img" alt="throne" />) }
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  defaultImg: PropTypes.bool.isRequired,
};

const mapStateToProps = (GlobalState) => ({
  isLoading: GlobalState.isLoading,
  defaultImg: GlobalState.defaultImg,
});

export default connect(mapStateToProps)(App);
