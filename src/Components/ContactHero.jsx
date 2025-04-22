import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <h1 className="contact-hero-title">
              Let’s Connect with <span>AutoCrest</span>
            </h1>
            <p className="contact-hero-subtext">
              We’re always here to assist you — whether it’s buying your dream car or getting expert support. Reach out to us today.
            </p>
          </Col>
          <Col md={6} sm={12} className="text-center mt-4 mt-md-0">
            <img
              src="/Contact.jpg"
              alt="Contact Us"
              className="img-fluid contact-hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHero;
