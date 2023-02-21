import logo from './logo.svg';
import {useState, useRef, useEffect} from 'react'
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('')
  const count = useRef(0)

  useEffect(() => {
    count.current += 1
  })

  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(event)=>setInputValue(event.target.value)}
        type="text"
      />
      <h1>counting {count.current}</h1>
    </div>
  );
}

export default App;
