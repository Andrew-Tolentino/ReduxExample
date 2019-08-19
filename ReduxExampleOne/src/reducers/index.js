import { combineReducers } from 'redux';
import UsernameReducer from './UsernameReducer';

// When importing: import reducers from ./src/reducers it will automatically export the default from this index file 
export default combineReducers({
    username: UsernameReducer,
    //password: () => [],
});