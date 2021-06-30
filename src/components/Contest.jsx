import React, {useEffect, useState} from "react";
import {getContests} from "../api/Api";
import ContestCard from "./ContestCard";

function Contests(props) {
    const [contestsList, setContestsList] = useState([]);
    useEffect(() => {
        getContests().then(res => {
            setContestsList(res.data.data);
        })
    }, []);

    return <div className="row initial">
        <div className="container">
            <h2>All Contests</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 ">
                {contestsList.map((contest) => {
                    return <ContestCard
                        key={contest._id}
                        id={contest._id}
                        setCont={props.cont}
                        title={contest.name}
                        duration={contest.duration}
                        time={contest.time}
                        host={contest.organizer}
                        contest={contest}
                        participant={props.participant}
                    />
                })}
            </div>
        </div>
    </div>
}

export default Contests;