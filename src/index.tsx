import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Injection } from './codeInjection';
import reportWebVitals from './reportWebVitals';


Injection().then(build);


function build() {
	ReactDOM.render(
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>,
	  document.getElementById('root')
	);	
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
