import axios from 'axios'

console.log('@client-auth', process.env)
export default axios.create({
    baseURL: process.env.AUTH_URL,
    headers: {
        "Content-type": "application/json",
        "api-token": process.env.API_TOKEN
    }
})