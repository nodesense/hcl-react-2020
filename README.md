# Get Started

```

git clone https://github.com/nodesense/hcl-react-2020

cd hcl-react-2020

npm install
```

# REACT

    props


    how to share data from parent to child?
        props 
            parent send props to child
                props contain the data

Issues:
    1. Deep hierarchy 
        parent level  1 [data] (func)
            level 2 (child) props - data, func
                level 3 (child) - props - data, func
                    level .... props -data, func
                            level 10 (child) - data - props -data, func() - calls parent

    how to share data from child to parent?
        callback to parent
          1. Issues 
              1. Deep hierarchy

    how to share data between siblings?

        React doesn't allow that, no way
        use the parent as mediator/communication
            sibling 1 update parent data
            parent pass that data to sibling 2

     how to share data between not related components

        React doesn't support

    how to share data between routes? page1 to page 2

        React doesn't support

    Component state on routed page, how to restore the state when user revisit the page

            - State is inside the component
            - When user nagivate to other page, the current component got destroyed
            - State also destroyed/ data also destroyed

    Business Logic
        React being Presentation/View Library - not ideal to write business logic inside
        Tight Coupling Business and Presentation Logic is not good


    REACT Projects, doesn't RECOMMEND using 
        MVC - Model View Componenent/Controller
        MVP - Model View Presenter
        MVVM - Model View ViewModel

    Solutions:
        FLUX - Architecture - White paper - how to build stateful React application
        It is not a Library, means you cannot find in npm

        Implementation for Flux architecure
            1. redux library
            2. mobx library

Functional Programming
    Redux - Predicatable


OOP vs Functioanl programming [Paradigm]

Issue wiht object origited programming

class Calc {
    // 1. hidden state
    int sum = 0;

    // why not predictable?
    // 2. impure function
        // given same input, doesn't give same output? 
    int add(int value) {
        // 3. mutation, the original value got changed
        sum += value;
        return sum;
    }
}

class Cart {
    //state
    items: ArrayList<CArtItem> = []
    add(item: CartItem) {
        this.items.push(item);; //mutable
    }
}

calc  = new Calc()

calc.add(10); // output 10
calc.add(10); // output 20
calc.add(20); // output 40

in real application, you 1000+ files, 10000000+ lines of code, 
100K objects in memory


calc.add(30);

calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(30);
calc.add(20); // output, not predictale?


Functional code  - predictable,
    - No state inside function, no STATIC
    - Pure function, given same input, get same output

function add(sum, value) {
    return sum + value;
}
OR 
function add(state = 0, value) {
    return state + value;
}

//redux reducer/flux callbacks
function calc(state = 0, action) {
    switch(action.type){ 
        case 'ADD':
                return state + action.payload.value;
        case 'SUB':
                return state - action.payload.value
    }
}

add(10, 20) ==> output 30
add(10, 20) ==> output 30 - predictable, given same input, we get same output


c:\users\krish\.npmrc

open the file

http-proxy
https-proxy

npm edit config



-------

# Install redux in the application

npm install redux




if git software is not installed, Download as zip, extract the files, and do `npm install`



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
