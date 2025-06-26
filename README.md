# Challenge 12 - Custom Fetch Hook

> Data fetching application using a custom React hook for API calls with loading and error states

## 🎯 Objective

Create a custom React hook (`useFetch`) to handle HTTP requests with loading states and error handling, demonstrating reusable data fetching logic.

## 📁 Files

- `src/App.jsx` - Main application with URL input and data display
- `src/hooks/useFetch.jsx` - Custom fetch hook implementation
- `package.json` - Dependencies and scripts

## 🔧 Implementation

**Custom useFetch Hook:**

```jsx
export const useFetch = (url) => {
  const [info, setInfo] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setInfo({ data: data, isLoading: false, hasError: null });
  };

  useEffect(() => {
    getFetch(url);
  }, [url]);

  return info;
};
```

**Using the Hook in App:**

```jsx
function App() {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const { data, isLoading, hasError } = useFetch(dataUrl);

  const valueUrl = () => {
    setUrl("");
    setDataUrl(url);
  }

  return (
    <>
      <h1>Fetch Data</h1>
      <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={() => valueUrl()}>Fetch</button>
      <p>{typeof data === "object" ? JSON.stringify(data, null, 2) : data}</p>
    </>
  )
}
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- Custom React hooks for data fetching
- Loading and error state management
- useEffect with dependency arrays
- Async/await in React hooks
- JSON data handling and display
- Controlled form inputs

---

**Challenge 12** - Data Structures and Algorithms II
