import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { listCharacters } from './index';
import { LOAD_CHARACTERS_REQUEST } from '../reducers/types';
import { addHandleEvery } from '../handleEveryAction';

const getCharacters = (page) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&status=dead`;
    return axios.get(url);
}

function* loadCharacters(action) {
    const { page } = action;
    try {
        const response = yield call(getCharacters, page);
        yield put (listCharacters(response.data.results));
    } catch (e) {
        console.log(e);
    }
}

addHandleEvery({
    [LOAD_CHARACTERS_REQUEST]: loadCharacters,
});
