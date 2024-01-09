import axios from 'axios'
const host = process.env.REACT_APP_HOST

export const Axios = axios.create({
    baseURL: host,
})

const axiosPrivate = axios.create({
    baseURL: host,
    headers: {
        'Content-Type': 'application/json',
    },
    credentials : 'include',
    withCredentials: true,
});

export default axiosPrivate;