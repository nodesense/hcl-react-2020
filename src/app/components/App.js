import React, {useState} from 'react';

import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import Cart from './Cart';

// not exported as default {} is must
import {ReduxCounter} from './ReduxCounter';

import ThemeContext from './ThemeContext';
import LanguageContext, {english, tamil} from './LanguageContext';

import Home from './Home';
import ProductList from './ProductList';
import Checkout from './Checkout';

import {BrowserRouter as Router, 
        Route,
        Switch,
        Redirect} from 'react-router-dom';


// functional component
// react calls function component
// create and return virtual dom
function App() {
    // setState hook/functional state management
    // state is initialized with success
    const [themeName, themeSetter] = useState('success');
    const [langDict, langSetter] = useState(english);

    // JSX - JavaScript + XML
    // convereted JS code by react preset/babel
    return (
        <Router>
        <div>
            <LanguageContext.Provider value={langDict}>
            <ThemeContext.Provider value={themeName}>
                <span> Theme: {themeName} </span>
             <button onClick={ () => themeSetter('warning')}>
                 Orange
             </button>
            <button onClick={ () => themeSetter('error')}>
                 Red
            </button>   
            <button onClick={ () => themeSetter('normal')}>
                 Default
            </button>   
            <button onClick={ () => langSetter(english)}>
                 English
            </button>   
            <button onClick={ () => langSetter(tamil)}>
            தமிழ்
            </button> 
            <Header >
                {/*  content children 
                    passed as props.children which is an array
                */}
                <h2>Product App</h2>
            </Header>

             <Switch> 
                <Route path="/" exact component={Home} />

                <Route path="/counter">
                    <Counter startValue={100} />     
                </Route> 

                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/products">
                    <ProductList />
                </Route>

                <Route path="/about" render= { () => (
                                                <div>
                                                    <h2>About page</h2>
                                                </div>
                                                )} 
                />

                <Route path="/login">
                    <h3>You need to login to access the page</h3>
                </Route>

                <Route path="/checkout">
                    <Checkout />
                </Route>

                <Route path="/react-counter">
                    <ReduxCounter />
                </Route>

                <Route path="*">
                    <h2>Page not found</h2>
                </Route>
            </Switch>  

            <Footer companyName="HCL"
                    branches= { ['IN', 'USA'] }
            >
                <p>Contact: +080-2222222</p>
                <p>email: someone@example.com</p>
            </Footer>
            </ThemeContext.Provider>
            </LanguageContext.Provider>
        </div>
        </Router>
    );
}

export default App;