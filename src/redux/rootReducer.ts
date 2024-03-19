import { combineReducers } from 'redux';

import todoReducer from './reducers/home/reducer';
import productReducer from './reducers/products/reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    productReducer,
});
  
  export type AppState = ReturnType<typeof rootReducer>;
  
  export default rootReducer;