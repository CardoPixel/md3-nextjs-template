// components/ui/ThemeToggle.tsx

import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';

interface ThemeToggleProps {
  onThemeChange: (theme: 'dark' | 'light') => void; // Define the prop's type
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({onThemeChange}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    const updateDarkModePreference = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsDarkMode(event.matches);
    };

    // Check if window is defined (only execute in the browser)
    if (typeof window !== 'undefined') {
      setIsDarkMode(darkModeMediaQuery.matches);
      darkModeMediaQuery.addEventListener('change', updateDarkModePreference);

      return () => {
        darkModeMediaQuery.removeEventListener(
          'change',
          updateDarkModePreference,
        );
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    onThemeChange(!isDarkMode ? 'dark' : 'light'); // Pass the updated theme to the callback
  };

  const goBack = () => {
    router.back(); // Use router.back() to go back to the previous page
  };

  const goHome = () => {
    router.push('/', {scroll: false});
  };

  return (
    <>
      <header>
        <nav>
          <button className="circle transparent md:ml-16 ml-3" onClick={goBack}>
            <i>arrow_back</i>
          </button>
          <a className="max" href="/" onClick={goHome}>
            MD3 Next.js Template
          </a>
          <button className="circle transparent" onClick={toggleTheme}>
            <i>{isDarkMode ? 'dark_mode' : 'light_mode'}</i>
            <span>{isDarkMode ? 'Dark' : 'Light'}</span>
            <div className="tooltip bottom">
              {isDarkMode ? 'Dark mode' : 'Light mode'}
            </div>
          </button>
        </nav>
      </header>
    </>
  );
};

export default ThemeToggle;
