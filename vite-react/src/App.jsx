import { useState } from 'react'
import lodash from 'lodash-es';
import logo from './logo.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const globModules = import.meta.glob('./glob/*')
  console.log('globModules',globModules)
  Object.entries(globModules).forEach(([k,v]) => {
    v().then(m => {
      console.log(k + ':' + m)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
