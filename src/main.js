import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import initialData from '../initialData/main'


// Entry point of your App
// #app is the DOM id in your HTML code 
// where the reactjs code will be injected
ReactDOM.render(<App data={initialData} />, document.querySelector("#app"));
