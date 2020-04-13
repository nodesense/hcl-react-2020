//FuncCounterContainer.spec.js
import React from 'react';
import FuncCounterContainer, {mapStateToProps,
        mapDispatchToProps} from './FuncCounterContainer';
import * as actions from '../state/actions';
import {mount} from 'enzyme';

import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux';
 

const middlewares = []
const mockStore = configureMockStore(middlewares)



describe("Func Counter Container test", () => {
    it("counter mapStateToProps", () => {
        const stateData = {
            counter: 10,
            brandState: {brands: [], loading: false}
        }

        expect(mapStateToProps(stateData))
            .toEqual({counter: 10})
    })

    it("counter mapDispatchtoProps", () => {
        //Smartness? 
        // defining scope of testing

        // mocked function
        const dispatch = jest.fn(); // create a mock function called dispatch
        
        const props = mapDispatchToProps(dispatch); 
        props.increment(10);

        //to check whether dispatch is called or not
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledTimes(1);

        expect(dispatch).toBeCalledWith(actions.increment(10)) // arg0, arg1, ....
        

        // how many times it is called
        // what is argument passed with dispatch

    })

    it('bindActionCreators test example', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        props.decrement(5);
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledTimes(1);

        expect(dispatch).toBeCalledWith(actions.decrement(5)) // arg0, arg1, ....
        
    })


  it('Store container mock', () => {
    
    const expectedActions = [
      // actions.addItemToCart(false)
    ]
    
    const state = {
      counter: 0
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <FuncCounterContainer   />
                        </Provider>);


    expect(wrapper.find("p").at(0).text()).toContain("Counter 0");
  })



  it('Store container integration with event test', () => {
    
    const expectedActions = [
       actions.increment(1)
    ]
    
    const state = {
      counter: 0
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <FuncCounterContainer   />
                        </Provider>);

    
    expect(wrapper.find("p").at(0).text()).toContain("Counter 0");

    // should dispatch increment action
    //wrapper.find("button").at(0).props.onClick(); // simulating onClick
    wrapper.find("button").at(0).simulate('click'); 

    // ensure all the actions dispatched or not
    expect(store.getActions()).toEqual(expectedActions)


  })
})