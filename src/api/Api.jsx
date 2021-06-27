import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export const createContest = payload=> api.post("/contest",payload);
export const deleteContest = id=>api.delete("/contest/"+id);
export const getContests = ()=>api.get("/contest/");