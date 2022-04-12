import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../Redux/Reducers';


const store = createStore(rootReducer,applyMiddleware(thunk));
export {
    store
};