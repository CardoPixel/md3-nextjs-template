'use client';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';

/**
 * Navigation bar component that adapts its layout based on screen size.
 *
 * @component
 * @example
 * // Usage in a React component
 * import NavBar from "./NavBar";
 * // ...
 * @return {JSX.Element} The NavBar component
 * <NavBar />
 */
export default function NavBar() {
  // Initialize the state with a default value that represents a mobile view
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Define a function to update the state based on the window's width
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 790);
    };

    // Set the initial value based on the current window size
    handleResize();

    // Add the event listener for subsequent resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <>
      <nav className={isLargeScreen ? 'm l left' : 'bottom'}>
        <header>
          <Image
            className="circle"
            src="/favicon.ico"
            alt="favicon"
            width="48"
            height="48"
          />
        </header>
        <a className="block" href="/">
          <i>home</i>
          <span>Home</span>
        </a>
        <a className="block" href="/">
          <i>search</i>
          <span>Search</span>
        </a>
        <a className="block" href="/">
          <i>share</i>
          <span>Share</span>
        </a>
      </nav>
    </>
  );
}
