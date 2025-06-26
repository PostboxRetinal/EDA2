import React, { createContext, useReducer, useContext, useEffect } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  username: null,
  lastPage: localStorage.getItem("lastPage") || "/",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        lastPage: state.lastPage, 
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        lastPage: "/",
      };
    case "SET_LAST_PAGE":
      return { ...state, lastPage: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("lastPage", state.lastPage);
  }, [state.lastPage]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};