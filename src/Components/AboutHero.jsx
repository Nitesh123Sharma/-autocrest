import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-5 mb-md-0 text-center">
            <img
              src="/Abouthero.jpg"
              alt="AutoCrest Team"
              className="about-hero-img"
            />
          </Col>
          <Col md={6}>
            <h1 className="about-hero-title">
              We Drive <span className="highlight">Passion</span>, You Drive <span className="highlight">Perfection</span>
            </h1>
            <p className="about-hero-text">
              At AutoCrest, excellence isn't just a word — it's our commitment. From carefully curated cars to unmatched customer care, we craft an automotive experience that redefines standards and earns trust.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;
