import React from "react";
import Question from "./Question";
import {Button} from "react-bootstrap";
import {updateParticipants} from "../api/Api";
let parId = 0;
function TakeContest(props) {
    parId = props.participant.id;
    let k = [];


    function handleSubmit(idx,val) {
        k[idx]=val;
    }
    function finalSubmit() {
        let sco = props.participant.score;
        console.log(props.questions)
        const que = props.questions.questions;
        que.forEach((obj)=>{k.push(obj.correctOpt);
        });
        k.forEach((ele,index)=>{
            if(ele===props.correctOpt)
                sco++;
        });
        console.log(sco);
        let newParticipant = props.participant;
        newParticipant.score = sco;
        updateParticipants(parId,newParticipant).then(()=>alert("quiz submitted"));
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