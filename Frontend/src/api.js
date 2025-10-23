import axios from "axios";

const app =  axios.create({
    baseURL:'http://localhost:5010'
})

export default app