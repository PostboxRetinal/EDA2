# Challenge 17 - React Router DOM with Tailwind CSS

> Multi-page navigation application using React Router DOM and styled with Tailwind CSS

## 🎯 Objective

Create a multi-page application with navigation using React Router DOM, demonstrating client-side routing, NavLink components, and modern styling with Tailwind CSS.

## 📁 Files

- `src/App.jsx` - Main app with Router and Routes configuration
- `src/components/NavComponent.jsx` - Navigation bar with active link styling
- `src/pages/Home.jsx` - Home page with navigation hooks
- `src/pages/About.jsx` - About page with content
- `src/pages/Services.jsx` - Services page
- `src/pages/Contact.jsx` - Contact page with form
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Dependencies including react-router-dom and tailwindcss

## 🔧 Implementation

**App Component with Router:**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavComponent />
        <main className="container mx-auto px-4 py-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};
```

**NavComponent with Active Links:**

```jsx
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-white font-bold text-xl">
          <NavLink to="/" className="hover:text-gray-300 transition duration-200">
            Challenge17 - NavBar ☕
          </NavLink>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-300 hover:text-white transition duration-200 ${
                isActive ? 'border-b-2 border-blue-400' : ''
              }`
            }
            end
          >
            Inicio
          </NavLink>
          {/* More NavLinks */}
        </div>
      </div>
    </nav>
  );
};
```

**Home Page with useNavigate:**

```jsx
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="space-y-8">
      <section className="text-center py-16 bg-white rounded-xl shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Textico de prueba.<br/>Lorem ipsum dolor sit amet, consectetur
        </p>
        <button
          onClick={handleContactClick}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Contactar
        </button>
      </section>
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

- React Router DOM for client-side routing
- BrowserRouter and Routes configuration
- NavLink with active state styling
- useNavigate hook for programmatic navigation
- Tailwind CSS for utility-first styling
- Responsive navigation with mobile considerations
- Route-based component rendering
- URL-based navigation and state management

---

**Challenge 17** - Data Structures and Algorithms II
