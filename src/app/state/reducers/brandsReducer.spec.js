//brandsReducer.spec.js
import {brandsReducer} from './brandsReducer';

import {initializeBrands} from '../actions';

describe('brandsReducer spec', () => {
    it('check loading of brands', () => {
        // deep equal array/objects, toEqual
        const brandsData = [ { id: 1234, name: 'iPhone'}, 
                             { id: 5343, name: 'Smasugn'}];

        const prevState = {
            loading: true,
            brands: [],
            products: []
        }

        const expectedState = {
                loading: true,
                brands: [ { id: 1234, name: 'iPhone'}, 
                            { id: 5343, name: 'Smasugn'}],
                products: []
        }

        expect(brandsReducer(prevState,  initializeBrands(brandsData)))
                    .toEqual(expectedState);
    })
})