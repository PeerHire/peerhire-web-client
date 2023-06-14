// authReducer.js

const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        // Update the state when the user logs in
        return {
          isAuthenticated: true,
          user: action.payload,
        };
      case 'LOGOUT':
        // Reset the state when the user logs out
        return {
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  