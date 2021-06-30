import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Contests from "./Contest";
import Leaderboards from "./Leaderboard";
import Quiz from "./Quiz";
import Register from "./Register";
import TakeContest from "./TakeContest";
import AddQuestions from "./AddQuestions";
import Login from "./Login";


function App() {
    const [participant, setParticipant] = useState(null);
    const [contest, setContest] = useState();
    const [form, setForm] = useState({});
    const [que, setQue] = useState([]);
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/contests" exact render={() => (<Contests cont={setContest} participant={participant}/>)}/>
                <Route path="/leaderboards" exact component={Leaderboards}/>
                <Route path="/create" exact render={() => (<Quiz data={setForm}/>)}/>
                <Route path="/" exact component={Landing}/>
                <Route path="/register" exact render={() => (<Register regi={setParticipant}/>)}/>
                <Route path="/login" exact render={() => (<Login logi={setParticipant}/>)}/>
                <Route path="/take" exact render={() => (<TakeContest cont={contest} participant={participant}/>)}/>
                <Route path="/add" exact render={() => (<AddQuestions setData={setQue} data={que} form={form}/>)}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;