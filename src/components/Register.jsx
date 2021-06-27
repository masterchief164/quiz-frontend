import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {createParticipant} from "../api/Api";


function Register(props) {
    const def = {}
    const [formContest, setFormContest] = useState(def)
    const setField = (field, value) => {
        setFormContest(prevState => {
            console.log(formContest);
            return {
                ...prevState, [field]: value
            }
        })
    }
    const handleClose = () => {
        const k = props.toggle;
        k(prevState=>!prevState);
    }
    const handleSubmit=(e)=>{
        createParticipant(formContest).then((res) => {
            if (res.status === 200)
                alert("Participant Registered");
            else
                alert("Unable to register! Please try again");
        });
        e.preventDefault();
        handleClose()
    }
    return <div className="initial" style={{padding:"10vh 35vw"}}>
        <div className="form p-3" id="form">
            <div className="spacer" style={{height: "6vh", width: "100%"}}>
                <button type="button" className="btn btn-outline-danger btn-sm close btn-extra"
                        onClick={handleClose}>Close
                </button>
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={e => setField("email", e.target.value)}
                                  placeholder="Enter quiz name"/>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={e => setField("username", e.target.value)}
                                  placeholder="Duration in minutes"/>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setField("name", e.target.value)} placeholder="Date"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => setField("password", e.target.value)} placeholder="Time"/>
                    <Button className="btn btn-lg bg-dark" style={{margin:"2vh"}} variant="dark" type="submit" onClick={handleSubmit}>
                        Register
                    </Button>
                </Form.Group>

            </Form>
        </div>
    </div>
}

export default Register;