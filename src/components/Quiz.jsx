import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import AddQuestions from "./AddQuestions";
import {createContest} from "../api/Api";

let questionArray=[]
const Quiz = () => {
    const [first, setFirst] = useState(true);
    const [formContest, setFormContest] = useState({})

    const setField = (field, value) => {
        setFormContest(prevState => {
            console.log(formContest);
            return {
                ...prevState, [field]: value
            }
        })
    }
    const handleSubmit = (e) => {

        setFirst(false);
        e.preventDefault();
    }

    const handleChange = (k) => {
        console.log(k);
        console.log(questionArray);
        questionArray = [...questionArray, k];
        console.log(questionArray);
    }

    const handleQSubmit = () => {
        const obj = {...formContest,questions:questionArray}
        console.log(obj)
        console.log(questionArray);
        createContest(obj).then((res) => {
            if (res.status === 200)
                alert("Contest Created");
            else
                alert("Unfortunately! The contest was not created. Please try again");
        });
        questionArray = [];
    }


    return first ? (
        <div className="test">
            <section className="addQuiz">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Quiz Name</Form.Label>
                        <Form.Control type="text" onChange={e => setField("name", e.target.value)}
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
    ) : <AddQuestions formData={formContest} change={handleChange} sub={handleQSubmit}/>;
};


export default Quiz;