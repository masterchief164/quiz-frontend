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
                <Form.Label>Quiz Name</Form.Label>
                <Form.Control type="text" onChange={e => setField("qName", e.target.value)}
                              placeholder="Enter quiz name"/>
                <Form.Label>Duration</Form.Label>
                <Form.Control type="number" onChange={e => setField("duration", e.target.value)}
                              placeholder="Duration in minutes"/>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={e => setField("date", e.target.value)} placeholder="Date"/>
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" onChange={e => setField("time", e.target.value)} placeholder="Time"/>
                <Form.Label>Organizer</Form.Label>
                <Form.Control as="select" onChange={e => setField("organizer", e.target.value)}>
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