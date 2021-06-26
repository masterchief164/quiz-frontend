import React, {useState} from "react";
import {Button} from "react-bootstrap";
import TakeContest from "./TakeContest";

function ContestCard(props) {
    const [show,setShow] = useState(true);
    function handleChange(){
        setShow(false);
    }
    return show?(<div className="col mb-4">
        <div className="card border-0">
            <div className="card-body" style={{padding: "5px"}}>
                <img src="https://dummyimage.com/600x400/000/fff.jpg" className="card-img-top" alt="..."/>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.host}</p>
                <p className="card-text">Starts : {props.time}</p>
                <p className="card-text">Duration : {props.duration}</p>
                <Button className="btn btn-dark" onClick={handleChange}>Participate</Button>
            </div>
        </div>
    </div>):<TakeContest id ={props.id}/>}

export default ContestCard;