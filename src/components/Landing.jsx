import React from "react";


function Landing() {
    return <div className="test">
        <div className="container-fluid back">
            <div className="row">
                <div className="col-lg-5">
                    <h1 className="display-2">Get Ready To Compete!</h1>
                    <div className="des">
                        <span>The best website for participating and hosting quizzing competitions</span>
                    </div>
                    <div className="but">
                        <button className="btn btn-lg bg-dark">Register</button>
                        <button className="btn btn-lg bg-dark">Login</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="image"/>
                    <div className="des">Wanna host a new quiz?</div>
                </div>
            </div>
        </div>
    </div>
}

export default Landing;