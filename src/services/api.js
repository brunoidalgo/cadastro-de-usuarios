import axios from "axios";

const api = axios.create({
    // Base URL da API (Back-end)
    baseURL: "http://localhost:3000"
})

export default api;