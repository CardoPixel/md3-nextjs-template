'use client';
import React, {useEffect, useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * A component that checks if the page is fully loaded.
 *
 * @return {*}
 */
export default function PageLoadChecker() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Set a timer to ensure that the loading indicator is displayed for at least 2 seconds
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1500);

    // Add a listener to the DOMContentLoaded event
    window.addEventListener('DOMContentLoaded', () => {
      // Clear the timer when the page is fully loaded
      clearTimeout(timer);
      setIsPageLoaded(true);
    });

    // Clean up the event listener and timer when the component unmounts
    return () => {
      window.removeEventListener('DOMContentLoaded', () => {
        // Clear the timer when the component unmounts
        clearTimeout(timer);
      });
    };
  }, []);

  return (
    <>
      {isPageLoaded ? null : ( // Return nothing when the page is fully loaded
        // Display a fullscreen loading backdrop with a spinner
        <Backdrop open={!isPageLoaded} style={{zIndex: 999}}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
