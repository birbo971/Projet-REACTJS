import React, { Component } from 'react';
import { Card, Container, Row, Col  } from 'reactstrap';
import Check from '../../common/Images/Check.png';
import Maps from '../../common/Images/Maps.png';
import Search from '../../common/Images/Search.png';
import Section from './Section';
import '../../common/Styles/HomePage.css'

class HomePage extends Component {
    render() {
      return (
        <div className="HomePage">
            <p className="lead display-3">Lorem ipsum dolor sit amet</p>
        <Container>
          <div className="Cards-HomePage">
          <Row>
            <Col xs={12} sm={4}>
                <Card body className="Card-HomePage text-center">
                    <div className="containerCard">
                        <img src={Check} id="img" alt="check" className="img" />
                        <div className="middle">
                            <h3>This is a title</h3>
                            <p>This is a short description</p>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={12} sm={4}>
                <Card body className="Card-HomePage text-center">
                    <div className="containerCard">
                        <img src={Maps} id="img" alt="check" className="img" />
                        <div className="middle">
                            <h3>This is a title</h3>
                            <p>This is a short description</p>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xs={12} sm={4}>
                <Card body className="Card-HomePage">
                    <div className="containerCard">
                        <img src={Search} id="img" alt="check" className="img-fluid" />
                        <div className="middle">
                            <h3>This is a title</h3>
                            <p>This is a short description</p>
                        </div>
                    </div>
                </Card>
            </Col>
            </Row>
          </div>
          </Container>
          <Section></Section>
          <Container>
          <div className="Section-2">
            <p className="lead display-4 title-section">Quam fringilla cursus.</p>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>  <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
          </div>
          </Container>
        </div>
      )
    }
  }
  export default HomePage;