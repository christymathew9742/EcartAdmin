import axios from '../../../axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import qs from 'qs';
import { 
    fetchProductFailure, 
    fetchProductSuccess,
    fetchPostProductFailure,
    fetchPostProductSuccess,
} from './actions';
import { FETCH_PRODUCT_REQUEST,FETCH_POST_PRODUCT_REQUEST } from './actionTypes';
import { IProduct } from './types';

const postProduct: any = (userToken: string, data: any) => axios.post<any[]>('/test.json',data);

function* fetchProductSaga(payload:any): any {
    const token:string = JSON.stringify(payload.userToken)
    try {
        const response: any = yield call(axios.get, `/test.json?orderBy="userToken"&equalTo=${token}`);
        yield put (
            fetchProductSuccess({
                products: response.data  
            })
        );
    } catch (e: any) {
        yield put(
            fetchProductFailure({
                error: e.message
            })
        );
    }
}

// post product
function* fetchPostProductSaga(payload:any):any {
    const {userToken} = payload
    try {
        const response: any = yield call
        (postProduct,userToken,{...payload.payload});
        yield put(
            fetchPostProductSuccess({
                product: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchPostProductFailure({
                error: e.message
            })
        );
    }
}

function* productSaga() {
    yield all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga)]);
    yield all([takeLatest(FETCH_POST_PRODUCT_REQUEST, fetchPostProductSaga)]);
}

export default productSaga;



