// Importing redux library. It is required to import the specific redux functions by destructuring them (Redux doesn't have a default export)
import { createStore } from 'redux';

//Reducer
const counterReducer = (state = { count: 0, attempts: 0, added: 0 }, action) => {
  switch (action.type) {
    case 'attempts':
      return { ...state, attempts: state.attempts + 1 }; // Spread the existing state by setting "...state," keeps the existing state properties unchanged (count and attempts). 
    case 'incrementCustom':
      return { ...state, count: state.count + action.amount, added: action.amount }; // Spread the existing state by setting "...state," keeps the existing state properties unchanged (count and attempts).
    default:
      return state;
  }
};

//Creating the Redux store
const store = createStore(counterReducer);

export default store;