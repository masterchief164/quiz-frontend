import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {getContests} from "../api/Api";

function Header(props) {

    function toggle(event) {

        const name = event.target.id;
        if (name === "Contest")
            getContests().then(contest => {
                props.setContests(contest)
                props.change(name)
                console.log(name)
            });
        else
            props.change(name);
    }

    return <Navbar fixed="top" className="scale dark-theme" variant="dark" expand="lg">
        <Navbar.Brand onClick={toggle}>
            <div id="Home" className="scaleTitle">Quizzer</div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link id="Contests" className="scaleText" onClick={toggle}>Contests</Nav.Link>
                <Nav.Link id="Leaderboards" className="scaleText" onClick={toggle}>Leaderboards</Nav.Link>
                <Nav.Link id="newQuiz" className="scaleText" onClick={toggle}>Create Quiz</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Header;