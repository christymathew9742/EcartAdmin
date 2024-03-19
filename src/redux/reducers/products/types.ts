import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_POST_PRODUCT_REQUEST,
    FETCH_POST_PRODUCT_SUCCESS,
    FETCH_POST_PRODUCT_FAILURE,
  } from './actionTypes';

export interface IProduct {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    key:[]
}

export interface ProductState {
    status: boolean;
    products: any[];
    error: string | null;
}

export interface FetchProductSuccessPayload {
    products: any[];
}

export interface FetchProductFailurePayload {
    error: string;
}

export interface FetchProductRequest {
    type: typeof FETCH_PRODUCT_REQUEST;
}

export type FetchProductSuccess = {
    type: typeof FETCH_PRODUCT_SUCCESS;
    payload: FetchProductSuccessPayload;
};

export type FetchProductFailure = {
    type: typeof FETCH_PRODUCT_FAILURE;
    payload: FetchProductFailurePayload;
};

export type FetchPostProductRequest = {
    type: typeof FETCH_POST_PRODUCT_REQUEST;
};

    export type FetchPostProductSuccess = {
    type: typeof FETCH_POST_PRODUCT_SUCCESS;
    payload: FetchProductSuccessPayload;
};

export type FetchPostProductFailure = {
    type: typeof FETCH_POST_PRODUCT_FAILURE;
    payload: FetchProductFailurePayload;
};
  
export type ProductActions =
    | FetchProductRequest
    | FetchProductSuccess
    | FetchProductFailure
    | FetchPostProductRequest
    | FetchPostProductSuccess
    | FetchPostProductFailure;