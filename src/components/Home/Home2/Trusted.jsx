import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import polymath from "../../assets/rec.png";
import acme from "../../assets/star.png";
import nitezsche from "../../assets/zodiac.png";
import epicurious from "../../assets/chart.png";
import cloudwatch from "../../assets/cloud.png";

function TrustedBrands() {
  return (
    <div className="text-center py-5 mt-5" style={{ backgroundColor: '#f9f9f9' }}>
      <h4 className="fw-bold mb-4 mt-5">Trusted by thousands of Medical Team worldwide</h4>

      <Container>
        <Row className="justify-content-center align-items-center g-3 mt-5">
          <Col xs={6} sm={4} md={2} className="d-flex align-items-center justify-content-center gap-2">
            <img src={polymath} alt="Polymath" width="30" />
            <span>Polymath</span>
          </Col>

          <Col xs={6} sm={4} md={2} className="d-flex align-items-center justify-content-center gap-2">
            <img src={acme} alt="Acme Corp" width="30" />
            <span>Acme Corp</span>
          </Col>

          <Col xs={6} sm={4} md={2} className="d-flex align-items-center justify-content-center gap-2">
            <img src={nitezsche} alt="Nitezsche" width="30" />
            <span>Nitezsche</span>
          </Col>

          <Col xs={6} sm={4} md={2} className="d-flex align-items-center justify-content-center gap-2">
            <img src={epicurious} alt="Epicurious" width="30" />
            <span>Epicurious</span>
          </Col>

          <Col xs={6} sm={4} md={2} className="d-flex align-items-center justify-content-center gap-2">
            <img src={cloudwatch} alt="CloudWatch" width="30" />
            <span>CloudWatch</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TrustedBrands;
