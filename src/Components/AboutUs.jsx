import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="about-title">About Us</h2>
            <p className="about-subtitle">
              Learn more about our mission, vision, and what makes AutoCrest your trusted car dealership.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img
              src="/About-img.jpg"
              alt="About AutoCrest"
              className="about-image"
            />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="about-heading">
              Discover the <span className="highlight">AutoCrest Experience</span>
            </h3>
            <p className="about-text">
              Welcome to AutoCrest – where luxury meets trust. We specialize in delivering top-tier
              cars with unmatched service. Our goal is simple: provide a seamless, premium car-buying
              experience that reflects your lifestyle and passion for performance.
            </p>
            <p className="about-text-light">
              With a carefully curated selection of elite vehicles and a team of automotive experts,
              we ensure every customer feels the AutoCrest difference.
            </p>
            <Link to="/about">
              <Button variant="outline-primary" size="lg" className="read-more-btn">
                Read More
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
