import React from "react";
import ContestCard from "./ContestCard";
import {getContests} from "../api/Api";

let result = []

getContests().then(res=> {
    result = res;
    console.log(result);
})
function Contest() {
    console.log("running")
    return (<div className="row initial">
        <div className="container">
            <h2>Present Contests</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
                {result.data.data.map((contest) => {
                    return <ContestCard
                        key={contest._id}
                        id={contest._id}
                        title={contest.name}
                        duration={contest.duration}
                        time={contest.time}
                        host={contest.organizer}
                        contest={contest}/>
                })}
            </div>
        </div>
    </div>)
}


export default Contest;