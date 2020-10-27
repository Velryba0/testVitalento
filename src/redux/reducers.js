import { combineReducers } from "redux";
import reducerCharacters from './ducks/characters';

export default combineReducers({
    characters: reducerCharacters
})