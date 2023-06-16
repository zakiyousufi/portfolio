import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };
  return { theme, toggleTheme };
};

export default useTheme;
