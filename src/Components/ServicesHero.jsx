import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesHero.css';

const ServicesHero = () => {
  return (
    <section className="services-hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="services-hero-title">
              Discover Our <span className="highlight">Exclusive Services</span>
            </h1>
            <p className="services-hero-description">
              At AutoCrest, we go beyond selling cars. From expert consultations to after-sales care,
              every service is tailored to deliver a smooth and elite experience that reflects your lifestyle.
            </p>
          </Col>
          <Col md={6} xs={12}>
            <img
              src="/ServicesHero.jpg"
              alt="AutoCrest Services"
              className="img-fluid services-hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHero;
