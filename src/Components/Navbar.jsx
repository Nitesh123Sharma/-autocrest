import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-white shadow-sm py-3 sticky-top">
            <Container>
                <Navbar.Brand className="fw-bold fs-4 text-primary">
                    Auto<span className="text-dark">Crest</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mx-auto gap-4">
                        <NavLink to="/" className="nav-link text-dark fs-6">Home</NavLink>
                        <NavLink to="/about" className="nav-link text-dark fs-6">About</NavLink>
                        <NavLink to="/services" className="nav-link text-dark fs-6">Services</NavLink>
                        <NavLink to="/contact" className="nav-link text-dark fs-6">Contact</NavLink>
                    </Nav>
                    <NavLink to="/booknow">
                        <Button variant="primary" className="rounded-pill px-4 my-2">Book Now</Button>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
