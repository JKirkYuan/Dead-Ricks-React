import axios from 'axios';

export function loadCharacter(){
    return(dispatch) => {
        return axios.get('https://rickandmortyapi.com/api/character/?name=rick&status=dead').then((response) => {
            dispatch(listCharacters(response.data.results))
        })
    }
}

export function listCharacters(characters) {
    return {
        type: 'LIST_CHARACTERS',
        characters
    }
}

export function selectCharacter(character) {
    return {
        type: 'SELECT_CHARACTER',
        character
    }
}
