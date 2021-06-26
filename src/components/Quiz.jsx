import React from "react";
import {Button, Form} from "react-bootstrap";

const Quiz = () => {
    return (
        <div className="test">
            <section className="addQuiz">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter event name"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDuration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" placeholder="Duration"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" placeholder="Date"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicParticipants">
                        <Form.Label>No of Participants</Form.Label>
                        <Form.Control type="text" placeholder="No of participants"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicOrganizers">
                        <Form.Label>Organizer</Form.Label>
                        <Form.Control type="text" placeholder="Organizer"/>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Add Event
                    </Button>
                </Form>
            </section>
        </div>
    );
};


export default Quiz;