# Challenge 09 - GIF Expert App

> React application that fetches and displays GIFs from Giphy API with category management

## 🎯 Objective

Build a React application that integrates with the Giphy API to search and display GIFs, featuring category management, form handling, and asynchronous data fetching.

## 📁 Files

- `src/App.jsx` - Main application component
- `src/components/GiftExpertApp.jsx` - Main app logic
- `src/components/AddCategory.jsx` - Category input component
- `src/components/GifGrid.jsx` - GIF display and search component
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

**Main App Structure:**

```jsx
export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['New Categories']);
    
    const onAddCategory = (category) => {
        setCategories(list => [...list, category]);
    }
    
    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map((category, key) => 
                <GifGrid category={category} key={key} />
            )}
        </>
    )
}
```

**API Integration:**

```jsx
const getGifs = async (category) => {
    const apiKey = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}`;
    const res = await fetch(url);
    const { data } = await res.json();
    return data.map(({id, title, images}) => ({
        id, title, url: images.original.url
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

- React useEffect hook
- API integration with fetch
- Environment variables in Vite
- Component communication (props)
- Async/await patterns
- Form handling and validation

---

**Challenge 09** - Data Structures and Algorithms II
