# Challenge 13 - Multiple Custom Hooks

> Breaking Bad quotes application combining multiple custom hooks for state and data fetching

## 🎯 Objective

Demonstrate the composition of multiple custom React hooks by building an app that fetches Breaking Bad quotes using a counter to navigate through different quotes.

## 📁 Files

- `src/App.jsx` - Main application entry point
- `src/components/MultipleCustomHook.jsx` - Component using multiple hooks
- `src/hooks/useCounter.jsx` - Custom counter hook
- `src/hooks/useFetch.jsx` - Custom fetch hook with error handling
- `package.json` - Dependencies and scripts

## 🔧 Implementation

**MultipleCustomHook Component:**

```jsx
export const MultipleCustomHook = () => {
    const { count, handleAdd } = useCounter();
    const { data, isloading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${count}`
    );

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <p>Count: {count}</p>
            {isloading ? (
                <div>Loading...</div>
            ) : (
                data && data.length > 0 && (
                    <blockquote>
                        <p>"{data[0].quote}"</p>
                        <cite>{data[0].author}</cite>
                    </blockquote>
                )
            )}
            <button onClick={handleAdd}>More quotes!</button>
        </div>
    );
};
```

**Enhanced useFetch Hook:**

```jsx
export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    useEffect(() => {
        setState({ data: null, isLoading: true, hasError: null });
        
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setState({ data, isLoading: false, hasError: null });
            })
            .catch(() => {
                setState({ data: null, isLoading: false, hasError: 'Error fetching data' });
            });
    }, [url]);

    return state;
};
```

## 🚀 Usage

```bash
npm install
npm run dev
```

## 🎓 Concepts

- Multiple custom hooks composition
- Hook dependency and data flow
- Error handling in fetch operations
- Dynamic URL generation with state
- Loading states and conditional rendering
- API integration with external services

---

**Challenge 13** - Data Structures and Algorithms II
