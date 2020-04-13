
describe("test suite", () => {

    // i want set my test case/initalize tests one time for all test cases
    // called before executing any single test case
    beforeEach(() => {
        console.log('Before Each, init test cases');
        //setting test data, mock
    })

    //called after executing individual test case
    // cleanup
    afterEach(() => {
        console.log('after each, after test case, cleaning')
    })

    // set of test cases
    // enlgish word it
    // it should be adding two positive numbers
    // it should divide negative numbers
    it('should add two +ve numbers', () => {
        console.log('add +ve numbers')
        // expectation/assetion
        // expect(actual result).toBe(excepted Result)
        expect(1 + 2).toBe(3)
    })
    it("should subtract two -ve number", () => {
        console.log('subtract -ve number')
        expect(-1-2).toBe(-3)
    })
})