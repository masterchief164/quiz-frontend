import React, {useState} from "react";
import Register from "./Register";
import {Zoom} from "@material-ui/core";


function Landing() {
    const [registerLogin,setRegisterLogin] = useState(true);
    function handleRegister() {
        setRegisterLogin(prevState => !prevState);
    }
    return registerLogin? (<div className="test">
        <div className="container-fluid back">
            <div className="row">
                <div className="col-lg-5">
                    <h1 className="display-2">Get Ready To Compete!</h1>
                    <div className="des">
                        <span>The best website for participating and hosting quizzing competitions</span>
                    </div>
                    <div className="but">
                        <button onClick={handleRegister} className="btn btn-lg bg-dark">Register</button>
                        <button onClick={handleRegister} className="btn btn-lg bg-dark">Login</button>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="image"/>
                    <div className="desc">Want to host a new quiz? Click on the Create Quiz button to get started</div>
                </div>
            </div>
        </div>
    </div>):(<Zoom in={true} ><Register toggle = {setRegisterLogin}/></Zoom>)
}

export default Landing;