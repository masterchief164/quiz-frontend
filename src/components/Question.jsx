import React from "react";
import {Form} from "react-bootstrap";

function Question(props) {
    function change(e) {
        props.scoring(props.id,e.target.value);
    }
    return <Form.Group className="marginTop">
        <Form.Label>{props.desc}</Form.Label>
        <Form.Control as="select" onChange={change}>
            <option value={"1"}>{props.opt1}</option>
            <option value={"2"}>{props.opt2}</option>
            <option value={"3"}>{props.opt3}</option>
            <option value={"4"}>{props.opt4}</option>
        </Form.Control>
    </Form.Group>
}

export default Question;
