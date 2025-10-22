const initialState = {
  isMenuOpen: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };// Toggle the boolean value of isMenuOpen with '!', so if it's true, it becomes false, and vice versa.
    case 'CLOSE_MENU':
      return { ...state, isMenuOpen: false };
    default:
      return state;
  }
};

export default menuReducer;