import React from "react";
import {Navbar,Nav} from "react-bootstrap";
function Header() {
    function toggle() {
        console.log("clicked")
    }
    return <Navbar fixed="top" className="scale dark-theme" variant="dark" expand="lg" >
        <Navbar.Brand onClick={toggle} href="#home"><span className="scaleTitle">Quizzer</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className="scaleText" href="#home">Contests</Nav.Link>
                <Nav.Link className="scaleText" href="#link">Leaderboards</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Header;