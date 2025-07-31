import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Logo from './assets/images/icons/favicon.ico';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 px-5 md:px-[6rem] md:py-2">
                <Header
                    darkMode={darkMode}
                    onToggleDarkMode={toggleDarkMode} />
                <Dashboard />
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default App;