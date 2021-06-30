import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function ContestCard(props) {
    const history = useHistory();
    const handleClick = () => {
        if (props.participant === null)
            alert("Please login or register.")
        else {
            props.setCont(props.contest);
            history.push("/take");
        }
    }
    return (<div className="col mb-4">
        <div className="card border-0">
            <div className="card-body" style={{padding: "5px"}}>
                <img src="https://dummyimage.com/600x400/000/fff.jpg" className="card-img-top" alt="..."/>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.host}</p>
                <p className="card-text">Starts : {props.time}</p>
                <p className="card-text">Duration : {props.duration}</p>
                <Button onClick={handleClick} className="btn btn-dark">Participate</Button>
            </div>
        </div>
    </div>)
}

export default ContestCard;