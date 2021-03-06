import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {createParticipant} from "../api/Api";
import {Link, useHistory} from "react-router-dom";


function Register(props) {
    const def = {}
    const [formContest, setFormContest] = useState(def)
    const setField = (field, value) => {
        setFormContest(prevState => {
            return {
                ...prevState, [field]: value
            }
        })
    }
    const history = useHistory();
    const handleSubmit = (e) => {
        createParticipant(formContest).then((res) => {
            if (res.status === 200) {
                alert("Participant Registered");
                props.regi(res.data.data)
            } else
                alert("Unable to register! Please try again");
        });
        history.push("/")
        e.preventDefault();
    }
    return <div className="initial" style={{padding: "10vh 35vw"}}>
        <div className="form p-3" id="form">
            <div className="spacer" style={{height: "6vh", width: "100%"}}>
                <Link to="/">
                    <button type="button" className="btn btn-outline-danger btn-sm close btn-extra">Close
                    </button>
                </Link>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={e => setField("email", e.target.value)}
                                  placeholder="Email"/>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={e => setField("username", e.target.value)}
                                  placeholder="Username"/>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => setField("name", e.target.value)} placeholder="Name"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => setField("password", e.target.value)}
                                  placeholder="Password"/>
                    <Button className="btn btn-lg bg-dark" style={{margin: "2vh"}} variant="dark" type="submit"
                            onClick={handleSubmit}>
                        Register
                    </Button>
                </Form.Group>

            </Form>
        </div>
    </div>
}

export default Register;