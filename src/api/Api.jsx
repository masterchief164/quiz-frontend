import axios from "axios";

const api = axios.create({
    baseURL: 'https://sleepy-journey-51279.herokuapp.com/api',
});

export const createContest = payload=> api.post("/note",payload);
export const deleteContest = id=>api.delete("/note/"+id);
export const getContests = ()=>api.get("/note/");