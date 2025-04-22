import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './WhatWeOffer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const offers = [
  {
    icon: 'bi-car-front-fill',
    title: 'Premium Car Sales',
    desc: 'Explore our collection of handpicked luxury cars tailored to match your style and performance needs.',
  },
  {
    icon: 'bi-tools',
    title: 'Expert Maintenance',
    desc: 'Get professional servicing and maintenance from certified automotive experts using genuine parts.',
  },
  {
    icon: 'bi-cash-coin',
    title: 'Financing Support',
    desc: 'We offer flexible financing options and assistance to make your car purchase seamless.',
  },
];

const WhatWeOffer = () => {
  return (
    <section className="offer-section">
      <Container>
        <h2 className="section-title text-center mb-5">
          What <span className="highlight">We Offer</span>
        </h2>
        <Row>
          {offers.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="offer-card h-100 shadow-sm text-center">
                <Card.Body>
                  <i className={`bi ${item.icon} offer-icon mb-3`}></i>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeOffer;
