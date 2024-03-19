
import { createSelector } from 'reselect';

import { AppState } from '../../rootReducer';

// const getPending = (state: AppState) => state?.productReducer?.status;

// const getProduct = (state: AppState) => state?.productReducer?.products;
// const getError = (state: AppState) => state?.productReducer?.error;

const getPending = (state: AppState) => state?.productReducer;

const getProduct = (state: AppState) => state?.productReducer;
const getError = (state: AppState) => state?.productReducer;
const responceArray:any =[]
export const getProductSelector = createSelector(getProduct, (products) => products)

export const getPendingSelector = createSelector(getPending,(pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);

