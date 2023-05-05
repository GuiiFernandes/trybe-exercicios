import { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  state = {
    counterClick: 0,
    classNumber: 'even'
  };
  
  counter = () => {
    this.setState(({ counterClick }) => ({
      counterClick: counterClick + 1,
    }));
    this.setState(({ counterClick }) => ({
      classNumber: counterClick % 2 === 0 ? 'even' : 'odd',
    }));
  }
  
  render() {
    const { classBorder } = this.props;
    const { counterClick, classNumber } = this.state;
    return (
      <div className={`div-counter ${classBorder} ${classNumber}`} onClick={this.counter}>
        <h1>{counterClick}</h1>
      </div>
    )
  }
}

Counter.propTypes = {
  classBorder: PropTypes.string,
};

export default Counter;
