import React from "react";
import Question from "./Question";
import {Button} from "react-bootstrap";
import {updateParticipants} from "../api/Api";
const parId = 0;
function TakeContest(props) {
    let k = [...props.correctOpt]
    function handleSubmit(idx,val) {
        k[idx]=val;
    }
    function finalSubmit() {
        let sco = parId
        k.forEach((ele,index)=>{
            if(ele===props.correctOpt[index])
                sco++;
        });
        updateParticipants(parId).then(()=>alert("quiz submitted"));
    }
    return (<div className="initial">
        {props.questions.questions.map((question,index) => {
            return <Question key={index} id={index} desc={question.desc} opt1={question.opt1} opt2={question.opt2} opt3={question.opt3}
                             opt4={question.opt4} scoring = {handleSubmit}/>
        })}
        <Button className="hello" variant="dark" type="submit" onClick={finalSubmit}>Submit Quiz</Button>
    </div>)
}

export default TakeContest;