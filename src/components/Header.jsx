import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    return <Navbar fixed="top" className="scale dark-theme" variant="dark" expand="lg">
        <Navbar.Brand>
            <Link to="/" style={{"color": "white", textDecoration: "none"}}>
                <div id="Home" className="scaleTitle">Quizzer</div>
            </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/contests" id="Contests" className="scaleText">Contests</Nav.Link>
                <Nav.Link as={Link} to="/leaderboards" id="Leaderboards" className="scaleText">Leaderboards</Nav.Link>
                <Nav.Link as={Link} to="/create" id="newQuiz" className="scaleText">Create Quiz</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Header;