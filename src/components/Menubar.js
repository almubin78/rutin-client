import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Keep Eye In Every Second</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/makerutin">Make Routine</Nav.Link>
                            <Nav.Link href="/purpose">Purpose</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="/managerutin">Manage Routine</Nav.Link>
                            <Nav.Link eventKey={2} href="/overview">
                                Overview
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;