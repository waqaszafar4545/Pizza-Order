import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://kodestudio.net'
});
export default instance;
