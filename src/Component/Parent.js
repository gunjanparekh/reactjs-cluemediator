import React, { Component } from 'react';
import Child from './Child';
 
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal : 'Test Message'
        }
        this.onInputChange = this.onInputChange.bind(this);
    }  

    onInputChange(e) {
        this.setState({ inputVal: e.target.value });
    }
    
    render() {
    return (
        <div>
            <h1>Parent Component</h1>
            Input: <input value={this.state.inputVal} onChange={this.onInputChange}/>
            <Child elementValue={this.state.inputVal} />
        </div>
    );
  }
}
 
export default Parent;