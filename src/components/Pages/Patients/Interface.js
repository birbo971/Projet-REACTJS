import React, { Component } from 'react';
import NavBar from'../../HeaderComponent/NavBar';
import Footer from'../../FooterComponent/Footer';

class Interface extends Component {
    render() {
      return (
            <div className="Interface">
                <NavBar></NavBar>
                <Footer></Footer>
            </div>
      )
    }
}
export default Interface;