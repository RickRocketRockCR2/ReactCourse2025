// Importing redux library. It is required to import the specific redux functions by destructuring them (Redux doesn't have a default export)
import { createStore } from 'redux';

//Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

//Creating the Redux store
const store = createStore(counterReducer);

export default store;