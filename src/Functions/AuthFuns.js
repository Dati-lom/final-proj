import axios from "axios"

const APIURL =process.env.REACT_APP_API_AUTH

const api = axios.create({
    baseURL:APIURL
});

export const register = (data) => api.post('/register', data);
export const login = (data) => api.post('/login', data);
export const logout = (username) => api.post(`/logout?username=${username}`);

export const getUser = (id) => api.get(`/get-user?id=${id}`);

export const checkUser = (token) => api.get(`/checkUser?token=${token}`);
