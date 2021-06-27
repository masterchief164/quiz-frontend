import React, {useEffect, useState} from "react";
import Header from "./Header";
import Landing from "./Landing";
import Contest from "./Contest";
import Quiz from "./Quiz";
import Footer from "./Footer";
import Leaderboard from "./Leaderboard";
import {getContests} from "../api/Api";

let participant = null;
function App() {
    const [contests,setContests ] = useState();
    useEffect(()=>{
        getContests().then(contest=>setContests(contest));
    },[])
    const [view, setView] = useState("Home");

    return <div>
        <Header change = {setView} contests = {contests} setContests = {setContests}/>
        {(view === "Home") ? <Landing/> :(view==="Contests")? <Contest contests = {contests}/>:(view==="Leaderboards")?<Leaderboard/>:<Quiz/>}
        <Footer/>
    </div>
}

export default App;