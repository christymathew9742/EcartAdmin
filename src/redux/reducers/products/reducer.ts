import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_POST_PRODUCT_FAILURE,
    FETCH_POST_PRODUCT_REQUEST,
    FETCH_POST_PRODUCT_SUCCESS,
} from './actionTypes';
  
import { ProductActions, ProductState } from './types';
  
const initialState: ProductState = {
    status: false,
    products: [],
    error: null,
};
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ProductActions) => {
    switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          status: false,
        };
    case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          status: true,
          products: action.payload.products,
          error: null,
        };
    case FETCH_PRODUCT_FAILURE:
        return {
            ...state,
            status: false,
            products: [],
            error: action.payload.error,
        };
    //post product
    case FETCH_POST_PRODUCT_REQUEST:
        return {
            ...state,
            pending: true,
            productPost: null,
        };
    case FETCH_POST_PRODUCT_SUCCESS:
        return {
            ...state,
            pending: false,
            productPost: action.payload,
            products: null,
            error: null,
        };
    case FETCH_POST_PRODUCT_FAILURE:
        return {
            ...state,
            pending: false,
            productPost: null,
            error: action.payload.error,
        };
    default:
        return {
          ...state,
        };
    }
  };
  