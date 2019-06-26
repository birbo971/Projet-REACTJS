import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
        <Navbar fixed="bottom"  expand="md" variant="light" bg="light">
            <p>Copyright by Pickidate</p>
        </Navbar>
        </div>
      </footer>
    )
  }
}
export default Footer;