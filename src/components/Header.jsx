import React from "react";
import {Navbar,Nav} from "react-bootstrap";
function Header() {
    function toggle() {
        console.log("clicked")
    }
    return <Navbar fixed="top" className="scale dark-theme" variant="dark" expand="lg" >
        <Navbar.Brand onClick={toggle} href="#home"><span className="scaleText">Quizzer</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="scaleText" href="#home">Home</Nav.Link>
                <Nav.Link className="scaleText" href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Header;