import { createUsernameActionTypes } from '../actions/CreateUsernameAction'

// Initial state of the reducer 
const initialState = {
    username: ""
};

// Initial state for this reducer is an empty object which is seen as so: state={}
export default UsernameReducer = (state=initialState, action) => {
    if (action.type === createUsernameActionTypes.CREATE_USERNAME) {
        return {
            ...state, 
            username: action.payload
        };
    }
    return state;
}