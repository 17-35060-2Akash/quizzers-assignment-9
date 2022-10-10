import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo2.png';
import logo2 from '../../images/logo1.png';

const Header = () => {
    return (
        <div className=''>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="">
                    <Container fluid className='mx-3'>

                        <Navbar.Brand>
                            <Link to='/'><img className='logo-img img-fluid' src={logo} alt="" /></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img className='logo-img img-fluid w-25 ps-2 ms-2 mt-2' src={logo2} alt="" />
                                    <h5 className='ms-3 mt-2 fw-bolder'>QUIZZERS</h5>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                                    <Link className='pb-3' to="/">Home</Link>
                                    <Link className='pb-3' to="/statistics">Statistics</Link>
                                    <Link className='pb-3' to="/blog">Blog</Link>
                                    <Link className='pb-3' to="/about">About</Link>
                                </Nav>
                                {/* <Form className="d-flex d-lg-none pt-4">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search Courses"
                                        id="search-bar"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Header;