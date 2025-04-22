import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Why Choose AutoCrest?</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="why-card h-100 text-center p-4">
              <i className="bi bi-shield-check icon-big text-primary mb-3"></i>
              <Card.Body>
                <Card.Title>Top Quality Cars</Card.Title>
                <Card.Text>
                  Every car we offer meets the highest standards of performance and design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="why-card h-100 text-center p-4">
              <i className="bi bi-headset icon-big text-danger mb-3"></i>
              <Card.Body>
                <Card.Title>24/7 Customer Support</Card.Title>
                <Card.Text>
                  We're with you every step of the way — anytime, anywhere.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="why-card h-100 text-center p-4">
              <i className="bi bi-currency-dollar icon-big text-success mb-3"></i>
              <Card.Body>
                <Card.Title>Best Pricing</Card.Title>
                <Card.Text>
                  Transparent and competitive pricing with no hidden costs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
