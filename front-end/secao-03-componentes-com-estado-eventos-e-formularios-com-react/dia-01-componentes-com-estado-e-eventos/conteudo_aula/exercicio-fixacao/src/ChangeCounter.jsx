import { Component } from 'react';
import Counter from './Counter';


class ChangeCounter extends Component {
  state = {
    classBorder: 'black',
  };
  
  ChangeBorder = (className) => {
    this.setState(() => ({
      classBorder: className,
    }));
  }

  render() {
    const { classBorder } = this.state;
    return (
      <div className='container'>
        <Counter classBorder={classBorder} />
        <div className='buttons-container'>
          <h2>BORDER</h2>
          <button className='btn blue' onClick={() => this.ChangeBorder('blue')}>Blue</button>
          <button className='btn green' onClick={() => this.ChangeBorder('green')}>Green</button>
          <button className='btn red' onClick={() => this.ChangeBorder('red')}>Red</button>
        </div>
      </div>
    );
  }
}

export default ChangeCounter;