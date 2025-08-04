import './HeroSection.css';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import robotHelp from "../../assets/mianImage2.jpg";
import users from "../../assets/businessman.png";
import mainImage from "../../assets/mainImage.jpg";
import rightIcon from "../../assets/rightIcon.png";
import star from "../../assets/star.png";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const tryHealify = () => {
    navigate("/chat");
  }
  return (<>
    <div className="hero-section">
      <Container fluid className="py-5">
        <p className="badge bg-dark text-white px-4 py-2 rounded-pill mb-3">
          Reliable Solution for Everyday health
        </p>
        <Row className="align-items-center">
          {/* LEFT SIDE */}

          <Col md={6} className="text-center text-md-start mb-md-0">

            <h1>
              Your Smart AI Health Companion -
              <br /> Anytime, Anywhere!
            </h1>
            <p className="text-muted mb-4">
              Grab quick health tips, get AI-powered suggestions, and stay on top of your well-being with Healify!
            </p>
            <div className="d-flex align-items-center gap-3 mb-4 justify-content-center justify-content-md-start">
              <Button onClick={tryHealify} variant="dark" className="px-4 py-2 rounded-pill">Try Healify Now</Button>
              <div className="icon-circle">
                <img src={rightIcon} alt="" style={{ height: "50px", borderRadius: "50%" }} />
              </div>
              <div className="icon-circle play">
                <span className="play-icon">▶</span>
              </div>
            </div>
            <div className="stats-box d-grid align-items-center justify-content-between gap-3 px-4 py-3 rounded" style={{ background: '#89D6FB', color: '#fff' }}>
              <div className='d-flex gap-3'>
                <h4 className="mb-1 fw-bold" style={{ fontSize: '28px', color: '#fff' }}>200K</h4>
                <span className="mb-0" style={{ color: '#fff' }}>Cured Satisfied patients<br />around the globe</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <div className="d-flex bg-white px-2 py-1 rounded-pill">
                  <img src={users} alt="User1" width={30} className="rounded-circle" />
                  <img src={users} alt="User2" width={30} className="rounded-circle mx-1" />
                  <img src={users} alt="User3" width={30} className="rounded-circle" />
                </div>
                <img src={star} alt="Link" width={20} />
              </div>
            </div>

          </Col>

          {/* RIGHT SIDE */}
          <Col md={6} className="text-center">
            <img src={mainImage} alt="AI Bot" className="img-fluid rounded" style={{ height: "310px" }} />
            <img src={robotHelp} alt="Robot Chat" className="img-fluid rounded mt-5" style={{ height: "200px" }} />
          </Col>

        </Row>
      </Container>
    </div>
  </>);
};

export default HeroSection;
