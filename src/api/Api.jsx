import axios from "axios";

const api = axios.create({
    baseURL: 'https://sleepy-eyrie-44003.herokuapp.com/api'
});

export const createContest = payload=> api.post("/contest",payload);
export const deleteContest = id=>api.delete("/contest/"+id);
export const getContests = ()=>api.get("/contest/");
export const getParticipants = ()=>api.get("/participants")
export const updateParticipants = (id,payload)=>api.put("/participants/"+id,payload)
export const createParticipant = (payload)=>api.post("/participants",payload);
export const loginParticipant = (payload) => api.post("/participants/login",payload);