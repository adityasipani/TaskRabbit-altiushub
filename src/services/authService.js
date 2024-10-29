import axios from 'axios';

export const register=(data)=>axios.post('/api/register',data);
export const login=(data)=>axios.post('/api/login',data);
export const getToken=()=>localStorage.getItem('token');
export const setToken=(token)=>localStorage.setItem('token',token);
export const removeToken=()=>localStorage.removeItem('token');
