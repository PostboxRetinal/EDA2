# Challenge 20 - Firebase Authentication with Redux Toolkit

> Complete authentication system using Firebase Auth, Redux Toolkit, and Tailwind CSS with email/password and Google Sign-In

## 🎯 Objective

Implement a full-featured authentication system using Firebase Authentication integrated with Redux Toolkit for state management, demonstrating modern authentication patterns with real-time user state persistence.

## 📁 Files

- `src/App.jsx` - Main app with Firebase auth state listener
- `src/main.jsx` - Redux store provider setup
- `src/store/store.js` - Redux Toolkit store configuration
- `src/store/authSlice.js` - Authentication state slice with RTK
- `src/firebase/config.js` - Firebase configuration and initialization
- `src/firebase/handleFirebaseError.js` - Firebase error handling utility
- `src/components/Auth.jsx` - Authentication UI component
- `src/hooks/useAuth.js` - Custom hook for authentication methods
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies including Firebase and Redux Toolkit

## 🔧 Implementation

**Firebase Configuration:**

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  // ... other config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
```

**Redux Toolkit Auth Slice:**

```javascript
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    isInitialized: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.isInitialized = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});
```

**App with Firebase Auth Listener:**

```jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { setUser, setLoading } from './store/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          lastLoginAt: user.metadata.lastSignInTime,
          createdAt: user.metadata.creationTime,
        }));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <Auth />
      </div>
    </div>
  );
}
```

**Auth Component with Multiple Sign-in Methods:**

```jsx
const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { registerWithEmail, loginWithEmail, signInWithGoogle, signOut } = useAuth();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await registerWithEmail(email, password);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  // UI for login/register forms and Google Sign-in
};
```

## 🚀 Usage

```bash
# Install dependencies
npm install

# Create .env file with Firebase config
# VITE_FIREBASE_apiKey=your_api_key
# VITE_FIREBASE_authDomain=your_project.firebaseapp.com
# VITE_FIREBASE_projectId=your_project_id
# ... other Firebase config variables

# Start development server
npm run dev
```

## 🎓 Concepts

- Firebase Authentication integration
- Redux Toolkit (RTK) for state management
- createSlice for simplified Redux logic
- Real-time authentication state with onAuthStateChanged
- Custom hooks for authentication methods
- Environment variables for Firebase configuration
- Error handling for authentication flows
- Tailwind CSS for responsive UI design
- Email/password and Google OAuth authentication
- Form validation and user experience patterns

---

**Challenge 20** - Data Structures and Algorithms II
