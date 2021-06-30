import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {createContest} from "../api/Api";
import {useHistory} from "react-router-dom";


function AddQuestions(props) {
    const defaultForm = {desc: "", opt1: "", opt2: "", opt3: "", opt4: "", correctOpt: 1};
    const [formQuestion, setFormQuestion] = useState(defaultForm)
    const setField = (field, value) => {
        setFormQuestion(prevState => {
            return {
                ...prevState, [field]: value
            }
        })
    }
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const tmp = [...props.data,formQuestion];
        const k = {...props.form, questions: tmp};
        createContest(k).then((res) => {
            if (res.status === 200)
                alert("The contest was created");
            else
                alert("Unfortunately! The contest was not created.")
            history.push("/create");
            setFormQuestion(defaultForm);
        });

    }
    const handleNext = () => {
        console.log(formQuestion)
        props.setData(prev => {
            return [...prev,formQuestion]
        });
        setFormQuestion(defaultForm);
    }
    return <section className="test">
        <Form>
            <Form.Group controlId="form">
                <Form.Label>Question Statement</Form.Label>
                <Form.Control type="text" onChange={e => setField("desc", e.target.value)} value={formQuestion.desc}
                              placeholder="Enter question description"/>
                <Form.Label>Option 1</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt1", e.target.value)} value={formQuestion.opt1}
                              placeholder="First Option"/>
                <Form.Label>Option 2</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt2", e.target.value)} value={formQuestion.opt2}
                              placeholder="Second Option"/>
                <Form.Label>Option 3</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt3", e.target.value)} value={formQuestion.opt3}
                              placeholder="Third Option"/>
                <Form.Label>Option 4</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt4", e.target.value)} value={formQuestion.opt4}
                              placeholder="Fourth Option"/>
                <Form.Label>Choose the correct option</Form.Label>
                <Form.Control as="select" onChange={e => setField("correctOpt", e.target.value)}
                              value={formQuestion.correctOpt}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </Form.Control>
                <Button variant="dark" onClick={handleNext}>Add Another</Button>
                <Button variant="dark" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Group>

        </Form>
    </section>
}

export default AddQuestions;