import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rohit Mehta',
    review: 'AutoCrest gave me the smoothest car buying experience. Highly recommended!',
    image: '/Testimonials1.jpg',
    rating: 5
  },
  {
    name: 'Anjali Verma',
    review: 'Beautiful collection and top-notch service. Loved it!',
    image: '/Testimonials2.jpg',
    rating: 4
  },
  {
    name: 'Sandeep Rana',
    review: 'Professional staff and premium cars. A great experience overall!',
    image: '/Testimonials3.jpg',
    rating: 5
  },
];

function Testimonials() {
  return (
    <section className="testimonials py-5">
      <Container>
        <h2 className="section-title text-center mb-5">What Our Clients Say</h2>
        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="testimonial-card text-center p-3 h-100">
                <img src={item.image} alt={item.name} className="client-img rounded-circle mx-auto mb-3" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="review-text">“{item.review}”</Card.Text>
                  <div className="stars">
                    {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
