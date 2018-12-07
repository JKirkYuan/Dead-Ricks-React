import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { listCharacters } from './index';
import { LOAD_CHARACTERS_REQUEST } from '../reducers/types';

const getCharacters = () => {
    return axios.get('https://rickandmortyapi.com/api/character/?status=dead');
}

function* loadCharacters(action) {
    try {
        const response = yield call(getCharacters);
        yield put (listCharacters(response.data.results));
    } catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery(LOAD_CHARACTERS_REQUEST, loadCharacters);
}

export default mySaga;
