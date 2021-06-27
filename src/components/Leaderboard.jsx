import React from "react";
import {Table} from "react-bootstrap";
import {getParticipants} from "../api/Api";


let result = []

getParticipants().then(res => {
    result = res.data.data;
    result.sort((a, b) => a.score > b.score ? 1 : -1)
});

function Leaderboard() {

    console.log(result);
    return <div className="initial"><Table responsive striped bordered hover className="table-responsive-lg" size="xl">
        <thead>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        {result.map((participant, index) => {
            return (<tr>
                <td>{index+1}</td>
                <td>{participant.name}</td>
                <td>{participant.score}</td>
                <td>amazing</td>
            </tr>)
        })}
        </tbody>
    </Table>
    </div>
}

export default Leaderboard;