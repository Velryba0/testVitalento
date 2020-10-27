import { fork, all } from 'redux-saga/effects';
import { charactersSaga } from './ducks/characters';

export default function* rootSaga() {
    yield all([
        fork(charactersSaga)
    ])
}