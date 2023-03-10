import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SubHeader = () => {
    return (

        <Navbar expand="lg" className='text-center'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='justify-content-start'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">Category</Nav.Link>
                    <Nav.Link href="#contact">Recepies</Nav.Link>
                    <Nav.Link href="#contact">Pages</Nav.Link>
                    <Nav.Link href="#contact">Elements</Nav.Link>
                    <Nav.Link href="#contact">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>

                </Nav>

                <Navbar.Collapse className='justify-content-end'>

                    <h5 style={{ padding: "15px" }}>Login</h5>
                    <button style={{ borderRadius: "35px", backgroundColor: "red", color: "white", padding: "10px", border: "red" }}> + Submit Recepie</button>

                </Navbar.Collapse>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SubHeader
