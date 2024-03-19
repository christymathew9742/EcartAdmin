import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchTodoFailure, fetchTodoSuccess } from './actions';
import { FETCH_TODO_REQUEST } from './actionTypes';
import { ITodo } from './types';

const getTodos: any = (action:any) => axios.get<ITodo[]>('/data.json');

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

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;



