import axios from "../../axios";
import { saveGames } from "./state";

//post game
export const postGame = ({ gameDate, team1Name, team2Name, winningTeam }) => {
    return (dispatch) => {
        axios.post("/games", {
            "game_date": gameDate,
            "team_one": team1Name,
            "team_two": team2Name,
            "winning_team": winningTeam,
        }).then(({ data }) => {
            dispatch(saveGames(data.data));
        })
    }
}

//get games
export const getGames = () => {
    return (dispatch) => {
        axios.get("/games").then(({ data }) => {
            dispatch(saveGames(data.data));
        })
    }
}