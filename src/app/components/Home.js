import React from 'react';

const Home = (props) => {
    console.log('home props', props);
    return (
        <div>
            <h2>Home</h2>

            <button onClick={ () => props.history.push('/cart')}>
                Cart
            </button>
            
        </div>
    )
}

export default Home;