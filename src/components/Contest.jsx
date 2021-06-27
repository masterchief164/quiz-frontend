import React, {useState} from "react";
import ContestCard from "./ContestCard";
import {getContests} from "../api/Api";
import TakeContest from "./TakeContest";

let result = []

getContests().then(res => {
    result = res;
})
let contests = ""

function Contest() {
    const [show, setShow] = useState(true);

    function handleChange(k) {
        contests = k;
    }

    return show ? (<div className="row initial">
        <div className="container">
            <h2>All Contests</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
                {result.data.data.map((contest) => {
                    return <ContestCard
                        key={contest._id}
                        id={contest._id}
                        title={contest.name}
                        duration={contest.duration}
                        time={contest.time}
                        host={contest.organizer}
                        contest={contest}
                        change={setShow}
                        pass={handleChange}/>
                })}
            </div>
        </div>
    </div>) : <TakeContest questions={contests}/>
}


export default Contest;