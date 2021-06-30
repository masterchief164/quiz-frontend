import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {getParticipants} from "../api/Api";

function Leaderboards() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        getParticipants().then(res => {
            const k = res.data.data;
            k.sort((a, b) => a.score < b.score ? 1 : -1)
            setResult(k);
        })
    }, []);

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
            return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{participant.name}</td>
                <td>{participant.score}</td>
                <td>{participant.username}</td>
            </tr>)
        })}
        </tbody>
    </Table>
    </div>
}
export default Leaderboards;