import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-5 pb-3">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0">
            <h5 className="footer-title">AutoCrest</h5>
            <p className="small">
              We deliver excellence in every drive. From luxury to comfort, your journey begins here.
            </p>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0">
            <h6>Contact Us</h6>
            <p className="small mb-0">
              <i className="bi bi-geo-alt-fill me-2"></i> New Delhi, India
            </p>
            <p className="small mb-0">
              <i className="bi bi-envelope-fill me-2"></i> nitesh861sharma@gmail.com
            </p>
            <p className="small">
              <i className="bi bi-telephone-fill me-2"></i> +91 9306919861
            </p>
          </Col>

          <Col xs={12} md={3} className="text-center text-md-end mt-4 mt-md-0">
            <h6 className="mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="mt-4 border-secondary" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} AutoCrest. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
