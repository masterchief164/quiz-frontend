import React from "react";
import Question from "./Question";

function TakeContest(props) {
    props.question.map(question=>{
        return <Question desc ={question.desc} opts={question.opts}/>
    })
}

export default TakeContest;