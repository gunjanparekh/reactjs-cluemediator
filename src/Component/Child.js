import React, { Component } from 'react';
 
class Child extends Component {
  render() {
    return (
        <div style={{ margin: '50px 0 50px 50px' }}>
            <h1>Child Component</h1>
            <hr />
            Input Value: {this.props.elementValue}
        </div>
    ); 
  }
}
 
export default Child;