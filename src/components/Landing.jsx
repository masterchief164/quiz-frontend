import React from "react";
import {Link} from "react-router-dom";

function Landing(props) {
    return <div className="test">
        <div className="container-fluid back">
            <div className="row">
                <div className="col-lg-5">
                    <h1 className="display-2">Get Ready To Compete!</h1>
                    <div className="des">
                        <span>The best website for participating and hosting quizzing competitions</span>
                    </div>
                    {!props.logged&&<div className="but">
                        <Link to="/register">
                            <button className="btn btn-lg bg-dark">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn-lg bg-dark">Login</button>
                        </Link>
                    </div>}
                </div>
                <div className="col-lg-5">
                    <div className="image"/>
                    <div className="desc">Want to host a new quiz? Click on the Create Quiz button to get started</div>
                </div>
            </div>
        </div>
    </div>
}

export default Landing;