const initialState = { count: 0, attempts: 0, added: 0, };    

//Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'attempts':
      return { ...state, attempts: state.attempts + 1 }; // Spread the existing state by setting "...state," keeps the existing state properties unchanged (count and attempts). 
    case 'incrementCustom':
      return { ...state, count: state.count + action.amount, added: action.amount }; // Spread the existing state by setting "...state," keeps the existing state properties unchanged (count and attempts).
    default:
      return state;
  }
};

export default counterReducer;