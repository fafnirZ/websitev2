import React from 'react'

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(()=> {
  	const root = document.documentElement;
  	const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
  	console.log(initialColorValue);
  	rawSetColorMode(initialColorValue);
  	console.log(colorMode);
  },[])


  const setColorMode = (newValue) => {
  	
  	const root = document.documentElement;
  	// 1. Update React color-mode state
	rawSetColorMode(newValue);
	// 2. Update localStorage
	localStorage.setItem('color-mode', newValue);

  }

  /*
  const setColorMode = (value) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  };
  */
  return (
    <ThemeContext.Provider value={colorMode, setColorMode}>
      {children}
    </ThemeContext.Provider>
  );
};