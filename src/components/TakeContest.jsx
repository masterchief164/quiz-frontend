import React, {useEffect} from "react";
import Question from "./Question";
import {Button} from "react-bootstrap";
import {updateParticipants} from "../api/Api";
import {useHistory} from "react-router-dom";

let parId = 0;

function TakeContest(props) {
    parId = props.participant._id;
    const k = [];
    useEffect(() => {
        for (let i = 0; i < props.cont.questions.length; i++)
            k.push(1);
    }, [])
    const history = useHistory();
    const handleScores = (idx, optSel) => {
        k[idx] = optSel;
    }

    function finalSubmit() {
        let sco = props.participant.score;
        const que = props.cont.questions;
        for (let i = 0; i < que.length; i++) {
            if (k[i] == que[i].correctOpt) {
                sco++;
            }
        }
        let newParticipant = props.participant;
        newParticipant.score = sco;
        updateParticipants(parId, newParticipant).then(() => {
            alert("quiz submitted");
        });
        history.push("/")
    }

    return (<div className="initial">
        {props.cont.questions.map((question, index) => {
            return <Question key={index} id={index} desc={question.desc} opt1={question.opt1} opt2={question.opt2}
                             opt3={question.opt3}
                             opt4={question.opt4} scoring={handleScores}/>
        })}
        <Button className="hello" variant="dark" type="submit" onClick={finalSubmit}>Submit Quiz</Button>
    </div>)
}

export default TakeContest;