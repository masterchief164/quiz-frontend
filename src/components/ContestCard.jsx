import React from "react";

function ContestCard(props) {
    return (<div className="col mb-4">
        <div className="card border-0">
            <div className="card-body" style={{padding: "5px"}}>
                <img src="https://dummyimage.com/600x400/000/fff.jpg" className="card-img-top" alt="..."/>
                <h5 className="card-title">Web Quest</h5>
                <p className="card-text">IIITDM Jabalpur</p>
                <p className="card-text">Starts : Starting</p>
                <p className="card-text">Duration : 3 hrs</p>

            </div>
        </div>
    </div>)
}

export default ContestCard;