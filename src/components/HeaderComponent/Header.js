"use strict";
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import '../../common/Styles/Header.css';
import mpvideo from '../../common/Videos/EOD.mp4';
import webmvideo from '../../common/Videos/EOD.mp4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    constructor(props) {
      super(props);
      this.state= {
        mpvideo: mpvideo,
        webmvideo: webmvideo
      }
    }
    render() {
      return (
        <div className="header-container">
        <div className="overlay"></div>
            <video autoPlay muted loop id="bg-video">
              <source src={this.state.webmvideo} type="video/mp4" />
              <source src={this.state.mpvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
          <div className="header-container">
            <div className="header-content">
              <h1 className="header-title">Emy - By MedicGlobal</h1>
              <h2 className="header-subtitle">HOW WILL HEALTH CARE BE PROVIDED IN THE FUTURE</h2>
              <Form inline className="Form-Header form-horizontal">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="etablishment" id="search" placeholder="Search for an establishment" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="adress" id="adress" placeholder="City,Adress" />
                </FormGroup>
                <Button><FontAwesomeIcon icon="search"/></Button>
              </Form>
            </div>
          </div>
        </div>
      )
    }
  }
  export default Header;