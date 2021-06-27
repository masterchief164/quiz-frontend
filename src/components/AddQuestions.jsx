import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";


function AddQuestions(props) {
    const defaultForm = {desc:"",opt1:"",opt2:"",opt3:"",opt4:"",correctOpt: 1};
    const [formQuestion, setFormQuestion] = useState(defaultForm)
    const setField = (field, value) => {
        setFormQuestion(prevState => {
            return {
                ...prevState, [field]: value
            }
        })
    }
    const handleSubmit = (e) => {
        props.change(formQuestion)
        props.sub(formQuestion);
        e.preventDefault();
        setFormQuestion(defaultForm);
    }
    const handleNext = () => {
        console.log(formQuestion)
        props.change(formQuestion)
        setFormQuestion(defaultForm);
    }
    return <section className="test">
        <Form>
            <Form.Group controlId="form">
                <Form.Label>Question Statement</Form.Label>
                <Form.Control type="text" onChange={e => setField("desc", e.target.value)} value={formQuestion.desc}
                              placeholder="Enter question description"/>
                <Form.Label>Option 1</Form.Label>
                <Form.Control type="text" onChange={e => setField("opt1", e.target.value)} value={formQuestion.opt1} placeholder="First Option"/>
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
                <Form.Control as="select" onChange={e => setField("correctOpt", e.target.value) } value={formQuestion.correctOpt}>
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