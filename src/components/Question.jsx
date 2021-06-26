import React from "react";
import {Form} from "react-bootstrap";

function Question(props) {

    return<Form.Group>
        <Form.Label>{props.desc}</Form.Label>
        <Form.Control as="select">
            <option>{props.opts[0]}</option>
            <option>{props.opts[1]}</option>
            <option>{props.opts[2]}</option>
            <option>{props.opts[3]}</option>
        </Form.Control>
    </Form.Group>
}

export default Question;
