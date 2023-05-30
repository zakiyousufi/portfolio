import ReactSwitch from "react-switch";
import { createContext, useState } from "react";
import HomePage from './components/Home';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import './App.css';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return ( 
    <ThemeContext.Provider value = {
          { theme, toggleTheme } } >
      <div className = 'app' id={theme}>
        <div className="switch">
          <label> {theme === "dark" ? <FaMoon /> : <FiSun />}</label>
          <ReactSwitch 
            onChange={toggleTheme}
            checked={theme === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            offColor="#ffae00"
          />
        </div>
        <HomePage />
      </div> 
    </ThemeContext.Provider>
  );
};

export default App;