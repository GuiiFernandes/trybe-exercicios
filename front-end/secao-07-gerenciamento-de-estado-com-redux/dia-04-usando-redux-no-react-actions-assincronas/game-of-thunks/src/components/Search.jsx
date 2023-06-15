import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI, backAction } from '../redux/actions';
import './Search.css';

class Search extends Component {
  state = {
    nameSearch: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { nameSearch } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchAPI(nameSearch));
  };

  render() {
    const { nameSearch } = this.state;
    const { data, error, dispatch } = this.props;
    const { name, gender, culture, titles, aliases, born, died, playedBy } = data;
    return (
      <>
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            this.handleSubmit();
          } }
          className="form-container"
        >
          <input
            type="text"
            name="nameSearch"
            value={ nameSearch }
            className="input-name"
            onChange={ this.handleChange }
            placeholder="Character Name"
          />
          <button className="btn-search"> Search </button>
        </form>
        { name && (
          <div className="character">
            <h2>{name}</h2>
            <p>
              <strong>Born:</strong>
              {' '}
              {born}
              {'. '}
              <strong>Died:</strong>
              {' '}
              {died}
              {died && '. '}
            </p>
            <p>
              <strong>Aliases:</strong>
              {' '}
              {aliases.join(', ')}
              .
            </p>
            <p>
              <strong>Titles:</strong>
              {' '}
              {titles.join(', ')}
              .
            </p>
            <p>
              <strong>Gender:</strong>
              {' '}
              {gender}
              .
            </p>
            <p>
              <strong>Culture:</strong>
              {' '}
              {culture}
              .
            </p>
            <p>
              <strong>Interpreted By:</strong>
              {' '}
              {playedBy}
              .
            </p>
            <button
              type="button"
              className="btn-back"
              onClick={ () => dispatch(backAction()) }
            >
              Back
            </button>
          </div>
        ) }
        { error && (
          <div className="error-container">
            <h2>{error}</h2>
          </div>
        )}
      </>
    );
  }
}

Search.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  error: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (GlobalState) => ({
  data: GlobalState.data,
  error: GlobalState.error,
});

export default connect(mapStateToProps)(Search);
