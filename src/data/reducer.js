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

const reducer = (state, action) => {
    switch (action.type) {
      case "SEND_NAMES_TO_STATE": 
        return sendNamesToState(state, action);
      case "ADD_PLAYER":
        return addPlayer(state, action);
    //   case "GENERATE_TEAMS":
    //     return splitIntoTeams(state, action);
    //   case "SAVE_GAMES": 
    //     return saveGamesReducer(state, action);
      case "RESET": 
      return {
        ...initial,
      };
      default: return state;
    };
};

export default reducer;
