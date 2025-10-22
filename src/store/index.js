import { combineReducers, createStore } from 'redux';
import counterReducer from './counterReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  menu: menuReducer,
});

const store = createStore(rootReducer);
export default store;
