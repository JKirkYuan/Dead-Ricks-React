function activeCharacter( state = null, action) {
    switch(action.type) {
        case 'SELECT_CHARACTER':
            return action.character;
        default:
            return state;
    }
}


export default activeCharacter;
