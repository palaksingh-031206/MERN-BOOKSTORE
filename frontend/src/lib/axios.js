import axios from "axios";
const api=axios.create({
    //baseURL:'http://localhost:3000'
    baseURL:'https://mern-bookstore-1ziu.onrender.com/'
})

export default api
