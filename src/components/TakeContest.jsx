import React from "react";
import Question from "./Question";

function TakeContest(props) {
    props.questions.map(question=>{
        return <Question desc ={question.desc} opt1={question.opt1} opt2={question.opt2} opt3={question.opt3} opt4 = {question.opt4}/>
    });
}

export default TakeContest;