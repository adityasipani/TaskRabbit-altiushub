import axios from 'axios';

export const register=(data)=>axios.post('/api/register',data);
export const login=(data)=>axios.post('/api/login',data);
export const getToken=()=>localstorage.getItem('token');
export const setToken=(token)=>localstorage.setItem('token',token);
export const removeToken=()=>localstorage.removeItem('token');
