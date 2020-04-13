import {counterReducer} from './counterReducer';

import {increment} from '../actions';

describe("counterReducer tests", () => {
    it("default initializer test", () => {
        expect(counterReducer(undefined, {type: 'INIT.a.b.v'})).toBe(0)
    })

    it("test increment by 10", () => {
        // toBe for primitives like string, number and boolean
        expect(counterReducer(0, increment(10))).toBe(10);
        expect(counterReducer(10, increment(100))).toBe(110);
    })
})