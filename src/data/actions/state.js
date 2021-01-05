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