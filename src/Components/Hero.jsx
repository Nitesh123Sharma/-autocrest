import { Carousel, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Hero.css';

function HeroCarousel() {
  return (
    <Carousel fade controls={false} indicators interval={4000} className="hero-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src="/Hero1.jpg" alt="Slide 1" />
        <Container className="carousel-caption-custom">
          <h1>Drive in Style with AutoCrest</h1>
          <p>Explore luxury cars tailored for performance and comfort.</p>
          {/* Wrap the Button with Link */}
          <Link to="/contact">
            <Button className="hero-btn">Browse Inventory</Button>
          </Link>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/Hero2.jpg" alt="Slide 2" />
        <Container className="carousel-caption-custom">
          <h1>Where Power Meets Elegance</h1>
          <p>Discover premium vehicles built for the road ahead.</p>
          {/* Wrap the Button with Link */}
          <Link to="/contact">
            <Button className="hero-btn">Get a Quote</Button>
          </Link>
        </Container>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/Hero3.jpg" alt="Slide 3" />
        <Container className="carousel-caption-custom">
          <h1>Your Journey Begins Here</h1>
          <p>Experience the future of driving with AutoCrest.</p>
          {/* Wrap the Button with Link */}
          <Link to="/contact">
            <Button className="hero-btn">Book a Test Drive</Button>
          </Link>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
