import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/components/App';

// bootstarp app component into real dom
// unidirectional data flow
// virtual doms are applied to REAL DOM
ReactDOM.render(<App />, 
                document.getElementById('root'));

