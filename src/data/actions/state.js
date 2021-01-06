export const sendNamesToState = (data) => {
    return {
        type: "SEND_NAMES_TO_STATE",
        teamNames: data,
    }
};

export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        data: data,
    }
};

export const splitIntoTeams = ( data ) => {
    return {
        type: "GENERATE_TEAMS",
        teamOne: data.team1Players,
        teamTwo: data.team2Players,
    }
};

export const updateTeam1Score = ( ) => {
    return {
        type: "UPDATE_TEAM_1_SCORE",
    };
}

export const updateTeam2Score = () => {
    return {
        type: "UPDATE_TEAM_2_SCORE",
    };
}

export const reset = () => {
    return {
        type: "RESET",
    };
};

// export const saveGames = (data) => {
//     return {
//         type: "SAVE_GAMES",
//         previousGames: data,
//     };
// };

