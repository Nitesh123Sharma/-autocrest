import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CarGallery.css';

const cars = [
  { id: 1, name: 'Audi R8', img: '/CarGallery1.jpg' },
  { id: 2, name: 'Rolls-Royce', img: '/CarGallery2.jpg' },
  { id: 3, name: 'Mercedes AMG', img: '/CarGallery3.jpg' },
  { id: 4, name: 'Range Rover Sport', img: '/CarGallery4.jpg' },
  { id: 5, name: 'Rolls-Royce', img: '/CarGallery5.jpeg' },
  { id: 6, name: 'Klassen', img: '/CarGallery6.jpg' }
];

function CarGallery() {
  return (
    <section className="car-gallery py-5">
      <Container>
        <h2 className="gallery-heading text-center mb-4">Explore Our Collection</h2>
        <Row>
          {cars.map((car) => (
            <Col key={car.id} md={4} sm={6} className="mb-4">
              <div className="gallery-card">
                <img src={car.img} alt={car.name} className="gallery-image" />
                <div className="gallery-overlay">
                  <h5>{car.name}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CarGallery;
