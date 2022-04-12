import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
const rootReducer = combineReducers({
    LoginReducer:LoginReducer,
});
export default rootReducer;