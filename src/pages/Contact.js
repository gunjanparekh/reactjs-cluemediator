import React, { Component } from 'react';
import Greeting from './Greeting';

class Contact extends Component {
  render() {
    const title = "Contact";
    return <div>
      <Greeting greeting={title} />
      <p>This is Contact page</p>
    </div>
  }
}

export default Contact;