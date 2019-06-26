import React, { Component } from 'react';
import Doctor from'../../common/Images/Doctor.png';
import HealthcareBuilding from'../../common/Images/HealthcareBuilding.png';
import MedicalRecords from'../../common/Images/MedicalRecords.png';
import { Container, Row, Col } from 'react-bootstrap';
class Section extends Component {
    render() {
      return (
        <div className="Section-1-HomePage">
          <p className="lead display-4 title-section">Donec ullamcorper vitae</p>
          <Container className="containerSection ss-style-triangles">
          <Row>
      
            <Col xs={12} sm={4}>
            <img src={ Doctor } className="logo-sections"/>
            <p className="h1">80 000</p><p> professionnals</p>
            </Col>

            <Col xs={12} sm={4}>
          <img src={ HealthcareBuilding } className="logo-sections"/>
          <p className="h1">1 700</p><p> Health Etablishments</p>
            </Col>

            <Col xs={12} sm={4}>
            <img src={ MedicalRecords } className="logo-sections"/>
            <p className="h1">35 millions</p><p> Visit Per Month</p>
            </Col>

              </Row>
            </Container>
        </div>
      )
    }
}

export default Section;