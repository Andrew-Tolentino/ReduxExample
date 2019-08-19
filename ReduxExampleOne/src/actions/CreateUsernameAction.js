export const createUsernameActionTypes = {
    CREATE_USERNAME: "CREATE_USERNAME"
}

export const createUsernameAction = (text) => {
    return {
        type: createUsernameActionTypes.CREATE_USERNAME,
        payload: text
    };
};
