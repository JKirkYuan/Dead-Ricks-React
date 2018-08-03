import { combineReducers } from 'redux';

import CharacterReducer from './reducer_characters';
import ActiveCharacter from './reducer_active_character';

const rootReducer = combineReducers({
    characters: CharacterReducer,
    character: ActiveCharacter
});

export default rootReducer;
