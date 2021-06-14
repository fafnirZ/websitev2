import react from 'react'
import { ThemeContext } from '../themeContext';

export function ThemeToggle() {
	const {colorMode, setColorMode} = react.useContext(ThemeContext);
	
	if(!colorMode) {
		return null;
	}

	return (
	    <label>
	      <input
	        type="checkbox"
	        checked={colorMode === 'dark'}
	        onChange={(e) => {
	          	setColorMode(e.target.checked ? 'dark' : 'light');
	        }}
	      />
	      Dark
	    </label>
	)
};