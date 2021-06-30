import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {loginParticipant} from "../api/Api";

function Login(props) {
    const [formContest, setFormContest] = useState({})
    const setField = (field, value) => {
        setFormContest(prevState => {
            return {
                ...prevState, [field]: value
            }
        })
    }
    const history = useHistory();
    const handleSubmit = (e) => {
        loginParticipant(formContest).then((res) => {
            if (res.status === 200) {
                alert("Login Successful");
                props.logi(res.data.participant)
            } else
                alert("Unable to login! Please try again");
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
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={e => setField("username", e.target.value)}
                                  placeholder="Username"/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={e => setField("password", e.target.value)}
                                  placeholder="Password"/>
                    <Button className="btn btn-lg bg-dark" style={{margin: "2vh"}} variant="dark" type="submit"
                            onClick={handleSubmit}>
                        Login
                    </Button>
                </Form.Group>
            </Form>
        </div>
    </div>
}

export default Login;