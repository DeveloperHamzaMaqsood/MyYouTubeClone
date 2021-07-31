import axios from 'axios';

console.log(process.env.REACT_APP_YY_API_KEY)
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params : {
        key: "AIzaSyAUH7pqeBH7f0na9sYTALNkfg-4EGrulE8"
    }
})

    export default request