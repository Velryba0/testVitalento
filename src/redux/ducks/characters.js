import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchCharacters } from '../../utils/API';

/**********SAGAS***********/

function* getCharacters() {
    try {
        const characters = yield call(fetchCharacters);
        yield put(receiveCharactersData(characters))
    } catch (error) {
        console.log('Error al guardar la información en el store');
    }
}

export function* charactersSaga() {
    yield all([
        takeEvery(REQUEST_CHARACTERS_DATA, getCharacters)
    ])
}

/**********ACTION & ACTION CREATOR***********/

export const REQUEST_CHARACTERS_DATA = 'REQUEST_CHARACTERS_DATA';
export const RECEIVE_CHARACTERS_DATA = 'RECEIVE_CHARACTERS_DATA';

export const requestChatactersData = () => ({ type: REQUEST_CHARACTERS_DATA});
export const receiveCharactersData = (data) => ({ type: RECEIVE_CHARACTERS_DATA, data});

/**********REDUCER***********/

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_CHARACTERS_DATA:
            return data;
        default:
            return state;
    }
}