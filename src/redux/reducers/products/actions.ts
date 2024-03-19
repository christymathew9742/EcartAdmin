import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_POST_PRODUCT_FAILURE,
    FETCH_POST_PRODUCT_REQUEST,
    FETCH_POST_PRODUCT_SUCCESS,
} from './actionTypes';

import {
    FetchProductRequest,
    FetchProductSuccess,
    FetchProductSuccessPayload,
    FetchProductFailure,
    FetchProductFailurePayload
} from './types';


export const fetchProductRequest = (
  userToken:any
  ): any => ({
    type: FETCH_PRODUCT_REQUEST,
    userToken
  });
  
export const fetchProductSuccess = (
    payload: FetchProductSuccessPayload
  ): FetchProductSuccess => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload
  });
  
export const fetchProductFailure = (
  payload: FetchProductFailurePayload
): FetchProductFailure => ({
  type: FETCH_PRODUCT_FAILURE,
  payload
});

//post product
export const fetchPostProductRequest = (payload: any): any => ({
  type: FETCH_POST_PRODUCT_REQUEST,
  payload
});
  
export const fetchPostProductSuccess = (payload: any): any => ({
  type: FETCH_POST_PRODUCT_SUCCESS,
  payload,
});
  
export const fetchPostProductFailure = (payload: any): any => ({
  type: FETCH_POST_PRODUCT_FAILURE,
  payload,
}); 

