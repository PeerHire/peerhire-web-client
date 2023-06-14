// authActions.js

export const login = (userData) => {
    // Perform login logic, e.g., make API request
    return async (dispatch) => {
      // Dispatch the LOGIN action with user data
      dispatch({
        type: 'LOGIN',
        payload: userData,
      });
    };
  };
  
  export const logout = () => {
    // Perform logout logic, e.g., clear local storage
    return async (dispatch) => {
      // Dispatch the LOGOUT action
      dispatch({
        type: 'LOGOUT',
      });
    };
  };
  