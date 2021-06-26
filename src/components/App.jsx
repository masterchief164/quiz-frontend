import React, {useState} from "react";
import Header from "./Header";
import Landing from "./Landing";
import Contest from "./Contest";
import Quiz from "./Quiz";
import Footer from "./Footer";

function App() {

    const [view, setView] = useState("Home");

    return <div>
        <Header change = {setView}/>
        {(view === "Home") ? <Landing/> :(view==="Contests")? <Contest/>:<Quiz/>}
        <Footer/>
    </div>
}

export default App;