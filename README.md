# Challenge 10 - GIF Search by Categories

> Simplified GIF search application with predefined categories and modular component structure

## 🎯 Objective

Build a streamlined React application that displays GIFs from Giphy API using predefined categories, featuring modular components and helper functions for better code organization.

## 📁 Files

- `src/App.jsx` - Main application with predefined categories
- `src/components/GifGrid.jsx` - Grid component for displaying GIFs
- `src/components/GifItem.jsx` - Individual GIF display component
- `src/helpers/getGifs.jsx` - API helper function
- `package.json` - Dependencies and scripts

## ⚙️ Setup Required

**Create `.env` file in project root:**

```bash
VITE_REACT_APP_GIPHY_API_KEY=your_api_key_here
```

**Get Giphy API Key:**

1. Visit [Giphy Developers](https://developers.giphy.com/)
2. Create account and generate API key
3. Add key to `.env` file

## 🔧 Implementation

**Main App with Categories:**

```jsx
const App = () => {
  const categories = ['Linux', 'Colombia'];

  return (
    <div>
      <h1>GIF Search by Categories</h1>
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
```

**API Helper Function:**

```jsx
export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));
};
```

## 🚀 Usage

**Setup:**

```bash
npm install
# Create .env file with your Giphy API key
npm run dev
```

## 🎓 Concepts

- Component modularity and separation
- Helper functions for API calls
- React useEffect with dependencies
- PropTypes for type validation
- Async/await with error handling
- Clean component architecture

---

**Challenge 10** - Data Structures and Algorithms II
