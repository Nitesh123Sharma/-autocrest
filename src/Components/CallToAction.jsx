import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="cta-section text-center py-5">
      <Container>
        <h2 className="cta-heading">Ready to Drive Your Dream Car?</h2>
        <p className="cta-text">Book an appointment now and let AutoCrest make your journey unforgettable.</p>
        <Link to="/booknow">  <Button size="lg" className="cta-button">Book Appointment</Button></Link>
      </Container>
    </section>
  );
}

export default CallToAction;
