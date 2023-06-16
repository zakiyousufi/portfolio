import ReactSwitch from 'react-switch';
import { createContext, useMemo } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import HomePage from './components/home/Home';
import AboutPage from './components/about/about';
import Recommendations from './components/recommendations/recommendations';
import Projects from './components/projects/projects';
import Navbar from './components/Navbar';
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
        <div className="switch d-flex justify-content-center align-items-center">
          <h4>
            { theme === 'dark' ? <FaMoon /> : <FiSun /> }
          </h4>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={30}
            width={60}
            offColor="#ffae00"
            className="mx-2"
          />
        </div>
        <HomePage id="home" />
        <AboutPage id="about" />
        <Recommendations id="recommendations" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
