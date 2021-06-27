import React from "react";
import Question from "./Question";
import {Button} from "react-bootstrap";

function TakeContest(props) {
    function handleSubmit() {

    }
    return (<div className="initial">
        {props.questions.questions.map((question,index) => {
            return <Question key={index} desc={question.desc} opt1={question.opt1} opt2={question.opt2} opt3={question.opt3}
                             opt4={question.opt4}/>
        })}
        <Button className="hello" variant="dark" type="submit" onClick={handleSubmit}>Submit Quiz</Button>
    </div>)
}

export default TakeContest;