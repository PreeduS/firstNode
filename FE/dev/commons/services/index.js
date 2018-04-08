import axios from 'Axios';

const services = {
    login: (username, password) =>
        axios.post('/api/UserManager/login',{username, password})
    ,
    logout: () =>
        axios.post('/api/UserManager/logout')

}

export default services;