import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";


function AddQuestions() {
    const [form, setForm] = useState({})

    const setField = (field, value) => {
        setForm(prevState => {
            return {
                ...prevState, [field]: value
            }
        })
        console.log(form);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleNext = ()=>{

    }
    return <section className="test">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Question Statement</Form.Label>
                <Form.Control type="text" onChange={e => setField("desc", e.target.value)}
                              placeholder="Enter quiz name"/>
                <Form.Label>Option 1</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt1", e.target.value)} placeholder="First Option"/>
                <Form.Label>Option 2</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt2", e.target.value)} placeholder="Second Option"/>
                <Form.Label>Option 3</Form.Label>
                <Form.Control type="text" onChange={e => setField("op3", e.target.value)} placeholder="Third Option"/>
                <Form.Label>Option 4</Form.Label>
                <Form.Control type="text" onChange={e => setField("op3", e.target.value)} placeholder="Fourth Option"/>
                <Form.Label>Choose the correct option</Form.Label>
                <Form.Control as="select" onChange={e => setField("opt4", e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </Form.Control>
                <Button variant="dark" type="reset" onClick={handleNext}>Add Another</Button>
                <Button variant="dark" type="submit" onClick={handleSubmit}>
                    Next
                </Button>
            </Form.Group>

        </Form>
    </section>
}

export default AddQuestions;