import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// load the redux store file into brower
import store from './app/store';


import App from './app/components/App';

console.log('end point', process.env.REACT_APP_ENDPOINT)

// bootstarp app component into real dom
// unidirectional data flow
// virtual doms are applied to REAL DOM
ReactDOM.render(<App />, 
                document.getElementById('root'));

