// import the axios library
import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
baseURL: "https://football-team-database.herokuapp.com/api",
headers: {
    Accept: "application/json",
    },
});