import './App.css'
import { useState } from 'react'
import { useFetch } from './hooks/useFetch'

function App() {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const { data } = useFetch(dataUrl);

  const valueUrl = () => {
    setUrl("");
    setDataUrl(url);
  }

  return (
    <>
      <h1>Fetch Data</h1>
      <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={() => valueUrl()}>Fetch</button>
      <p>{
        typeof data === "object"
        ? JSON.stringify(data, null, 2)
        : data
        }
      </p>
    </>
  )
}

export default App;