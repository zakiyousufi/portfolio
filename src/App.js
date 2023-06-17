import ReactSwitch from 'react-switch';
import { createContext, useMemo } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import Navbar from './components/Navbar';
import HomePage from './components/home/Home';
import AboutPage from './components/about/about';
import Recommendations from './components/recommendations/recommendations';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import useTheme from './components/toggleTheme';
import './App.css';

const ThemeContext = createContext(null);

function App() {
  const { theme, toggleTheme } = useTheme();

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="app d-flex flex-column justify-content-center align-items-center"
        id={theme}
      >
        <Navbar className="navbar m-d-none" />
        <HomePage />
        <AboutPage />
        <Recommendations />
        <Projects />
        <Contact />
        <div className="switch d-flex justify-content-center align-items-center">
          <h4>
            { theme === 'dark' ? <FaMoon /> : <FiSun /> }
          </h4>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={25}
            width={50}
            offColor="#000011"
            onColor="#a4ceff"
            className="mx-2"
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
