import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend-page-food-git-main-diiegohdezs-projects.vercel.app/api'
});

export default instance;