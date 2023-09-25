import axios from "axios"

const APIURL = "https://localhost:7191/api"

const api = axios.create({
    baseURL:APIURL
});

export const register = (data) => api.post('/Auth/register', data);
export const login = (data) => api.post('/Auth/login', data);
export const logout = (username) => api.post(`/Auth/logout?username=${username}`);

export const getUser = (id) => api.get(`/Auth/get-user?id=${id}`);

export const checkUser = (token) => api.get(`/Auth/checkUser?token=${token}`);
