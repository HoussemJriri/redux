import {combineReducers} from 'redux';
import toDoReducer from './reducer';
import saveReducer from'./saveReducer'
export default combineReducers({toDoReducer,saveReducer})