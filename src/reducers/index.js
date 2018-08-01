import { combineReducers } from 'redux';

import CharacterReducer from './reducer_characters';

const rootReducer = combineReducers({
    characters: CharacterReducer
})

export default rootReducer;
