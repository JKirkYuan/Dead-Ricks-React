function getCharacters(state=[], action) {
    switch(action.type) {
        case 'LIST_CHARACTERS':
            return action.characters
        default:
            return state;
    }
}

export default getCharacters;
