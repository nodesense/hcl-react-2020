import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';

// functional component
// react calls function component
// create and return virtual dom
function App() {
    // JSX - JavaScript + XML
    // convereted JS code by react preset/babel
    return (
        <div>
            
            <Header >
                {/*  content children 
                    passed as props.children which is an array
                */}
                <h2>Product App</h2>
            </Header>

            <Counter startValue={100} />

            <Counter startValue={50} />


            <Footer companyName="HCL"
                    branches= { ['IN', 'USA'] }
            >
                <p>Contact: +080-2222222</p>
                <p>email: someone@example.com</p>
            </Footer>
        </div>
    );
}

export default App;