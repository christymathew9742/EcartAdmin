import { all, fork } from 'redux-saga/effects';
import todoSaga from './reducers/home/sagas';

export function* rootSaga() {
    yield all([fork(todoSaga)]);
}