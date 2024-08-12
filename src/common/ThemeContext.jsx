// Importing necessary React functions and hooks
import React, { createContext, useContext, useEffect, useState } from 'react';

// Creating a context object for theme management
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage and provide the theme to child components
// This is whole function doing set of things contains many functions
export const ThemeProvider = ({ children }) => {
  
  // Initializing the theme state with a lazy initializer
  // It checks if there is a saved theme in localStorage; if not, defaults to 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );
//   We are setting the intial value to be light get from localstorage set that as default or || put as light
  
  // useEffect hook to handle side effects when the theme changes
  useEffect(() => {
    // Set the 'data-theme' attribute on the body element to the current theme
    document.body.setAttribute('data-theme', theme);
    // Save the current theme to localStorage for persistence across sessions
    localStorage.setItem('theme', theme);
  }, [theme]); // The effect runs whenever the 'theme' state changes
//[theme] array used is like the effect with detect the changes of theme - it is called dependency array
  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
// Here having set of functions we have use thier functionalities like Themeprovider.toggle to toggle the theme like that
// useEffect is automatically call when change happens
// return statement explained in detail in document
  // Returning the ThemeContext.Provider to wrap children components
  // Passing the current theme and toggleTheme function as the value
  return (
    // Here this is the important part. Here children means any component like App itself. When it came 
    // Themem context the child we pass inside like app component will have the state of theme and can use toggleTheme
    // fucntion that we pass inside
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Rendering any child components wrapped by ThemeProvider */}
    </ThemeContext.Provider>
  );
};
