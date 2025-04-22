import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './FeaturedCars.css';

function FeaturedCars() {
  const cars = [
    {
      name: 'Mercedes Benz C-Class',
      price: '₹48,00,000',
      image: '/FeaturedCars1.jpeg',
    },
    {
      name: 'BMW 5 Series',
      price: '₹65,00,000',
      image: '/FeaturedCars2.jpg',
    },
    {
      name: 'Audi A6',
      price: '₹60,00,000',
      image: '/FeaturedCars3.jpg',
    },
  ];

  return (
    <section className="featured-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Featured Cars</h2>
        <Row className="g-4">
          {cars.map((car, index) => (
            <Col md={4} key={index}>
              <Card className="car-card h-100 text-center">
                <div className="img-wrap">
                  <Card.Img variant="top" src={car.image} alt={car.name} />
                </div>
                <Card.Body>
                  <Card.Title>{car.name}</Card.Title>
                  <Card.Text className="price">{car.price}</Card.Text>
                  <Link to="/booknow"> <Button variant="dark" className="book-btn">Book Now</Button> </Link>
                </Card.Body>
              </Card>
            </Col>
          )) }
        </Row>
      </Container>
    </section>
  );
}

export default FeaturedCars;
