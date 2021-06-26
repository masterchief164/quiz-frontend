import React, {useState} from "react";
import Header from "./Header";
import Landing from "./Landing";
import Contest from "./Contest";
import Quiz from "./Quiz";
import Footer from "./Footer";
import Leaderboard from "./Leaderboard";

function App() {

    const [view, setView] = useState("Home");

    return <div>
        <Header change = {setView}/>
        {(view === "Home") ? <Landing/> :(view==="Contests")? <Contest/>:(view==="Leaderboards")?<Leaderboard/>:<Quiz/>}
        <Footer/>
    </div>
}

export default App;