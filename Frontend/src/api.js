import axios from "axios";

const app =  axios.create({
    baseURL:'http://localhost:5000',
    headers:{
        "x-access-token": localStorage.getItem("token")
    }
})

export default app
