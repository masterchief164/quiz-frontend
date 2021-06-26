import axios from "axios";

const api = axios.create({
    baseURL: 'https://sleepy-eyrie-44003.herokuapp.com/api',
});

export const createContest = payload=> api.post("/contest",payload);
export const deleteContest = id=>api.delete("/contest/"+id);
export const getContests = ()=>api.get("/contest/");