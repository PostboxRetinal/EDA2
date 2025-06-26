# Challenge 18 - React Context API with Authentication

> Authentication system using React Context API, useReducer, and protected routes with React Router DOM

## 🎯 Objective

Implement a complete authentication system using React Context API with useReducer for state management, demonstrating protected routes, authentication context, and persistent login state.

## 📁 Files

- `src/App.jsx` - Main app with Router, AuthProvider and route configuration
- `src/context/authContext.jsx` - Authentication context with useReducer
- `src/utils/PrivateRoute.jsx` - Protected route component
- `src/components/NavComponent.jsx` - Navigation with conditional rendering based on auth state
- `src/pages/HomePage.jsx` - Public home page
- `src/pages/AboutUs.jsx` - Public about page
- `src/pages/LoginPage.jsx` - Login page with authentication logic
- `src/pages/Dashboard.jsx` - Protected dashboard page
- `package.json` - Dependencies including react-router-dom

## 🔧 Implementation

**AuthContext with useReducer:**

```jsx
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
```

**PrivateRoute Component:**

```jsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const PrivateRoute = () => {
  const { state } = useAuth();
  
  if (!state.isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  return <Outlet />;
};
```

**App with AuthProvider:**

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/authContext';
import NavComponent from './components/NavComponent';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  const currentUser = { name: 'adminDebug' };
  
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard user={currentUser} />} />
        </Route>
      </Routes>
    </>
  );
};

const AppWithRouter = () => {
  return <App />;
};

const Root = () => (
  <AuthProvider>
    <Router>
      <AppWithRouter />
    </Router>
  </AuthProvider>
);

export default Root;
```

**LoginPage with Authentication:**

```jsx
const LoginPage = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const lastPage = location.state?.from?.pathname || state.lastPage || "/";

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username: "UsuarioFake" } });
    dispatch({ type: "SET_LAST_PAGE", payload: lastPage });
    navigate(lastPage, { replace: true });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- React Context API for global state management
- useReducer hook for complex state logic
- Protected routes with conditional navigation
- Authentication flow with login/logout
- LocalStorage for persistent state
- Conditional rendering based on authentication state
- useNavigate and useLocation hooks
- Context Provider pattern
- Route protection with Outlet component

---

**Challenge 18** - Data Structures and Algorithms II
