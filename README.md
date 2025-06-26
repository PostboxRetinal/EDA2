# Challenge 22 - Full-Stack Todo App with Firebase & Redux Toolkit

> Complete full-stack application with Firebase Authentication, Firestore database, Redux Toolkit state management, and Tailwind CSS styling

## 🎯 Objective

Build a complete full-stack todo application demonstrating Firebase Authentication, Firestore CRUD operations, Redux Toolkit for state management, and modern React patterns with a polished UI.

## 📁 Files

- `src/App.jsx` - Main app with Firebase auth listener and Redux setup
- `src/main.jsx` - Redux store provider configuration
- `src/components/Auth.jsx` - Authentication component with login/register/todo integration
- `src/components/TodoList.jsx` - Todo component with Firestore CRUD operations
- `src/store/authSlice.js` - Redux Toolkit authentication slice
- `src/store/store.js` - Redux store with RTK configuration
- `src/firebase/config.js` - Firebase configuration (Auth + Firestore)
- `src/hooks/useAuth.js` - Custom authentication hook
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies including Firebase, Redux Toolkit, Tailwind

## 🔧 Implementation

**Firebase Configuration with Firestore:**

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_apiKey,
  authDomain: process.env.VITE_FIREBASE_authDomain,
  projectId: process.env.VITE_FIREBASE_projectId,
  // ... other config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, googleProvider, db };
```

**TodoList with Firestore CRUD:**

```jsx
import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/config';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // CREATE
  const createTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      await addDoc(collection(db, 'todos'), {
        text: newTodo,
        completed: false,
        createdAt: new Date().toISOString(),
      });
      setNewTodo('');
      fetchTodos();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  // READ
  const fetchTodos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'todos'));
      const todosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosData);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // UPDATE
  const updateTodo = async (id, updates) => {
    try {
      await updateDoc(doc(db, 'todos', id), updates);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  // DELETE
  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
}
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
  },
});
```

**Auth Component Integration:**

```jsx
const Auth = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      {!isAuthenticated ? (
        // Login/Register Form
        <AuthForm />
      ) : (
        // Authenticated User with TodoList
        <div>
          <h2>Welcome {user.email}!</h2>
          <TodoList />
          <LogoutButton />
        </div>
      )}
    </div>
  );
};
```

## 🔧 Environment Setup

Create a `.env` file with your Firebase configuration:

```env
VITE_FIREBASE_apiKey=your_api_key
VITE_FIREBASE_authDomain=your_project.firebaseapp.com
VITE_FIREBASE_projectId=your_project_id
VITE_FIREBASE_storageBucket=your_project.firebasestorage.app
VITE_FIREBASE_messagingSenderId=your_messaging_sender_id
VITE_FIREBASE_appId=your_app_id
VITE_FIREBASE_measurementId=your_measurement_id
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- Firebase Authentication (Email/Password, Google Sign-In)
- Firestore database with real-time CRUD operations
- Redux Toolkit for modern state management
- React hooks (useState, useEffect, useMemo, custom hooks)
- Firebase onAuthStateChanged for auth persistence
- Tailwind CSS for responsive design
- Environment variables for secure configuration
- Form validation and error handling
- Component composition and conditional rendering
- Modern React patterns and best practices

---

**Challenge 22** - Data Structures and Algorithms II | **🎉 FINAL CHALLENGE 🎉**
