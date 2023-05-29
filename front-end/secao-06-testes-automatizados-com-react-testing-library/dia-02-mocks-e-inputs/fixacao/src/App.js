import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    joke: '',
  };

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke = async () => {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    const { joke } = await (await fetch(API_URL, REQUEST_CONFIG)).json();
    this.setState({ joke });
  };

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <p>{joke}</p>
        <button onClick={ this.fetchJoke }>New Joke</button>
      </div>
    );
  }
}

export default App;
