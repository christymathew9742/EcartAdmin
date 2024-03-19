import { all, fork } from 'redux-saga/effects';
import todoSaga from './reducers/home/sagas';
import productSaga from './reducers/products/sagas'

export function* rootSaga() {
    yield all([fork(todoSaga)]);
    yield all([fork(productSaga)]);
}