import axios from "axios";

const api = axios.create({
    // Base URL da API (Back-end)
    baseURL: "https://express-mongodb-api-nay0.onrender.com"
    // http://localhost:3000
    // https://express-mongodb-api-nay0.onrender.com
})

export default api;