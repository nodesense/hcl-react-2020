
//cartReducer.js
export const cartReducer = (state = {}, action) => {
    console.log('cartReducer called', state, action)
    switch(action.type) {
        default:
            return state;
    }
}
