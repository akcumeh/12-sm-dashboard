import { useState } from 'react';
import Logo from './assets/images/favicon.ico';
import './App.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://github.com/akcumeh" target="_blank">
                    <img src={Logo} className="logo" alt="Angel logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App;