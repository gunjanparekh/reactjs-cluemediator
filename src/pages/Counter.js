import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        }
      }
     
      handleIncrement = () => {
        this.setState((prevState) => ({
          counter: prevState.counter + 1
        }));
      }
     
      handleDecrement = () => {
        this.setState((prevState) => ({
          counter: prevState.counter - 1
        }));
      }
      
    render() {
      return (
        <div>
            <h2>Counter Component</h2>
            <button onClick={this.handleIncrement}>Click to increment by 1</button>
            <button onClick={this.handleDecrement}>Click to decrease by 1</button>
            <h2>{this.state.counter}</h2>
            <hr />
        </div>
      );
    }
  }
   
  export default Counter