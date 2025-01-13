import axios from 'axios';

const URL = {
    BASE: `http://localhost:4444/`,
};

const instance = axios.create({
    baseURL: `${URL.BASE}api/`,
});

export const API_URL = `${URL.BASE}api/`;

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');

    return config;
});

export default instance;
