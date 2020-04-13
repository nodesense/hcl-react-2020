//for react testing
//https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582

// jest is using node.js to run the test case, not the brwoser
// window.localStorage, it will file
// JEST uses virtual dom

//used by react internally to invoke render functions in react framewokr
// mock browser function
const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

export default raf