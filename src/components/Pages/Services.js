import React, { Component } from 'react';
import NavBar from'../HeaderComponent/NavBar';
import Header from'../HeaderComponent/Header';
import Footer from'../FooterComponent/Footer';
import {Card, Col, Row} from 'react-bootstrap';
import '../../common/Styles/Services.css';
import Heart from '../../common/Images/Heart.png';
import Medical from '../../common/Images/Medical.png';
import Healthcare from '../../common/Images/Healthcare.png';
class Services extends Component {
  render() {
    return (
        <div className="Services">
          <NavBar className=""></NavBar>
          <h1 className="header-title">Services</h1>
                <h2 className="header-subtitle">Our Services</h2>
            <div className="Cards-Services-Global">
              <Card bg="secondary" text="white" className="CardsServ">
                <Card.Img variant="top" src={ Heart } style={{ width:'50%', display:'block', marginLeft:'auto',marginRight:'auto',marginTop:30}}/>
                <Card.Body>
                  <Card.Text className="Text-cards">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card bg="secondary" text="white" className="CardsServ">
              <Card.Img variant="top" src={ Medical } style={{ width:'50%', display:'block', marginLeft:'auto',marginRight:'auto',marginTop:30}}/>
                <Card.Body>
                  <Card.Text className="Text-cards">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card bg="secondary" text="white" className="CardsServ">
              <Card.Img variant="top" src={ Healthcare } style={{ width:'50%', display:'block', marginLeft:'auto',marginRight:'auto',marginTop:30}}/>
                <Card.Body>
                  <Card.Text className="Text-cards">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              </div>

              <Footer></Footer>
        </div>
    )
  }
}
export default Services;