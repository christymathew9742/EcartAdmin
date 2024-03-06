import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchTodoFailure, fetchTodoSuccess } from './actions';
import { FETCH_TODO_REQUEST } from './actionTypes';
import { ITodo } from './types';

const getTodos: any = (action:any) => axios.get<ITodo[]>('/data.json');

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga(action:any): any {
  try {
    const response: any = yield call(getTodos,action.payload);
    yield put (
      fetchTodoSuccess({
        todos: response.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;



