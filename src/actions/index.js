import { LIST_CHARACTERS, SELECT_CHARACTER, LOAD_CHARACTERS_REQUEST } from '../reducers/types';

export function loadCharacterList(page) {
    return {
        type: LOAD_CHARACTERS_REQUEST,
        page
    };
}

export function listCharacters(characters) {
    return {
        type: LIST_CHARACTERS,
        characters
    };
}

export function selectCharacter(character) {
    return {
        type: SELECT_CHARACTER,
        character
    };
}
