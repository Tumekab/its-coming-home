import initial from "./initial";

const sendNamesToState = (state, { teamNames }) => {
  return {
      ...state,
      team1Name: teamNames.team1Name,
      team2Name: teamNames.team2Name,
  }
}

const addPlayer = (state, { data }) => {
  return {
      ...state,
      allPlayers: [...state.allPlayers, { name: data.playerName }]
  }
}

const splitIntoTeams = (state, action) => {
  let playerArray = state.allPlayers;

  const shuffle = (playerArray) => playerArray.sort(() => 0.5 - Math.random());

  let newArray = shuffle(playerArray);

  let team1Players = newArray.slice(0, 5);
  let team2Players = newArray.slice(5, 10);

  return {
      ...state,
      team1Players: team1Players,
      team2Players: team2Players,
      teamName1: action.team1Name,
      teamName2: action.team2Name,
  }
}

const updateTeam1Score = (state) => {
  return {
      ...state,
      team1Score: state.team1Score + 1,
  }
}
const updateTeam2Score = (state) => {
  return {
      ...state,
      team2Score: state.team2Score + 1,
  }
}

//saving games reducer
const saveGamesToApi = (state, { previousGames }) => {
  return {
      ...state,
      previousGames,
      gamesLoaded: true
  }
}

const reducer = (state, action) => {
    switch (action.type) {
      case "SEND_NAMES_TO_STATE": 
        return sendNamesToState(state, action);
      case "ADD_PLAYER":
        return addPlayer(state, action);
      case "GENERATE_TEAMS":
        return splitIntoTeams(state, action);
      case "UPDATE_TEAM_1_SCORE":
        return updateTeam1Score(state, action);
      case "UPDATE_TEAM_2_SCORE":
        return updateTeam2Score(state, action);
      case "RESET": 
      return {
        ...initial,
      };
      case "SAVE_GAMES": 
        return saveGamesToApi(state, action);
      default: return state;
    };
};

export default reducer;
