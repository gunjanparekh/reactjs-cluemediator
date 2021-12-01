import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
// import About from './About';
// import Contact from './Contact';
 

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link className="right" to="/contact">Contact</Link>
       </div>
    );
  }
}
 
export default Navbar
