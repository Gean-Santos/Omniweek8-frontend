import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-omniweek8.herokuapp.com/'
})

export default api