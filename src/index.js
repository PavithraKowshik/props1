import React from 'react';
import ReactDOM from 'react-dom';
class Car extends React.Component {
  render() {
    return <h2>This car is {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
    
      <Car brand="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));


