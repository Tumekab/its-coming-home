import initial from "./initial";



const reducer = (state, action) => {
    switch (action.type) {
    //   case "SEND_NAMES_TO_STATE": 
    //     return sendNamesToState(state, action);
    //   case "ADD_PLAYER":
    //     return addPlayer(state, action);
    //   case "GENERATE_TEAMS":
    //     return splitIntoTeams(state, action);
    //   case "SAVE_GAMES": 
    //     return saveGamesReducer(state, action);
    //   case "RESET": 
    //   return {
    //     ...initial,
    //   };
      default: return state;
    };
};

export default reducer;
