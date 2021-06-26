import React, {useEffect, useState} from "react";
import ContestCard from "./ContestCard";
import {getContests} from "../api/Api";

function Contest() {
    /*const [list, addToList] = useState([]);
    useEffect(() => {
        getContests().then(result => addToList(result.data));
    }, [list]);*/

    return (<div className="row initial">
        <div className="container">
            <h2>Present Contests</h2>
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
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
                <ContestCard/>
            </div>
        </div>
    </div>)
}

export default Contest;