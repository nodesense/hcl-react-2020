import React from 'react';

import Header from './Header';
import Footer from './Footer';

// functional component
// react calls function component
// create and return virtual dom
function App() {
    // JSX - JavaScript + XML
    // convereted JS code by react preset/babel
    return (
        <div>
            <h2>Product App</h2>
            <Header />

            <Footer companyName="HCL"
                    year={2020}
                    branches= { ['IN', 'USA'] }
            />
        </div>
    );
}

export default App;