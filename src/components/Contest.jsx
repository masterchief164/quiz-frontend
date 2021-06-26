import React, {useState} from "react";
import ContestCard from "./ContestCard";
import {getContests} from "../api/Api";
function Contest(props) {
    const[list,addToList] = useState();
    getContests()
    return (<div className="row initial">
        <div className="container">
            <h2>Responsive card deck example</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
            </div>
        </div>
    </div>)
}

export default Contest;