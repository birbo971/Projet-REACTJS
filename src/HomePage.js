import React, { Component } from 'react';
import { Card } from 'reactstrap';
import Check from './Images/Check.png';
import Maps from './Images/Maps.png';
import Search from './Images/Search.png';
import Section from './SectionComponents/Section';
import 'bootstrap'
import './HomePage.css'
class HomePage extends Component {
    render() {
      return (
        <div className="HomePage">
          <div className="Cards-HomePage">
          <div className="view overlay zoom">
              <img src={Check} alt="Check-Icon" id="check-icon-home" />
              <div className="mask flex-center">
                <h3>This is a title</h3>
                <p className="white-text">This is a short description</p>
              </div>
          </div>
          <div className="overlay"></div>
          <Card body className="Card-HomePage">
            <img src={Maps} alt="Check-Icon" id="" className="img-fluid" />
            <h3>This is a title</h3>
            <p>This is a short description</p>
          </Card>
          <Card body>
            <img src={ Search } alt="Maps-Icon" id=""  className="img-fluid"/>
            <h3>This is a title</h3>
            <p>This is a short description</p>
          </Card>
          </div>
          <Section></Section>
        </div>
      )
    }
  }
  export default HomePage;