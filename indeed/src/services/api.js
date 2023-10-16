import axios from "axios";
const API_URL = "http://localhost:8080";

export const savePost = async (payload)=> {
    try{
        console.log(payload);
        return await axios.post(`${API_URL}/post`, payload)

    }catch(error) {
        return console.log(error.message);
    }
}
