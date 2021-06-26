import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import AddQuestions from "./AddQuestions";

const Quiz = () => {
    const [first, setFirst] = useState(true);
    const [form, setForm] = useState({})

    const setField = (field, value) => {
        setForm(prevState => {
            return {
                ...prevState, [field]: value
            }
        })
    }
    const handleSubmit = (e) => {
        setFirst(false);
        e.preventDefault();
    }
    return first ? (
        <div className="test">
            <section className="addQuiz">
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
                        <Form.Control type="text" onChange={e => setField("organizer", e.target.value)}
                                      placeholder="Organizer"/>
                        <Button variant="dark" type="submit" onClick={handleSubmit}>
                            Next
                        </Button>
                    </Form.Group>

                </Form>
            </section>
        </div>
    ) : <AddQuestions/>;
};


export default Quiz;