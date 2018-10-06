import axios from 'axios';

const instance = axios.create({
    baseURL:"https://myportfolio-42a16.firebaseio.com/"
})

export default instance;