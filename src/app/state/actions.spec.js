import {initializeLoading, fetchBrands} from './actions';
import * as ActionTypes from './action-types';
import  MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

//mock restful api
import fetchMock from 'fetch-mock';
import * as actions from "./actions";
import config from '../config';
   

describe("actions tests", () => {
    it("loading Test", () => {
        expect(initializeLoading(true)).toEqual({ 
            type: ActionTypes.INITIALIZE_LOADING,
            payload: {loading: true}
        })
    })
})


describe("testing get products", () => {

    let  mock;

    beforeEach(() => {
        mock =  new MockAdapter(axios);
    })

    // called after every test case, clean up, restore to origin
    afterEach(() => {
       // nock.cleanAll()
     //   fetchMock.restore();
      })
       
    it("should get products", async () => {
 
        // actual url
        // expected mock response
        // fetchMock.get('http://localhost:7070/api/brands', //mock request
        //               [{id: 1, name: 'iPhone'},{id: 2, name:'Google'}]); // mock response

        mock.onGet(`${config.apiEndPoint}/api/brands`)
                    .reply(200, [{id: 1, name: 'iPhone'},{id: 2, name:'Google'}]);

        // call the actual function, which makes api call
        let actionFn = fetchBrands();

        //mock for dispatch, to emulate thunk calling behaviour
        let dispatch = jest.fn();
         
        // calling thunk method with dispatch mock function
        let products = await actionFn(dispatch);
     
        console.log("cheecking mock called");
        expect(dispatch).toHaveBeenCalled();

        expect(dispatch).toHaveBeenCalledTimes(3);
         
        // Check output of the second dispatch call
        expect(dispatch.mock.calls[0]).toEqual([actions.initializeLoading(true)]);

        expect(dispatch.mock.calls[1]).toEqual([actions.initializeBrands(
                [{id: 1, name: 'iPhone'}, {id: 2,  name: 'Google'}])
        ]);

        expect(dispatch.mock.calls[2]).toEqual([actions.initializeLoading(false)]);
         
    })
})