import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-1aead-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance;