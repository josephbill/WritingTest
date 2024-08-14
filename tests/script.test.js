const assert = require('assert')
const add = require('../script')

describe('Addition function tests',() => {
    it('should add 2 + 2 to equal 4',() => {
        assert.ok(add(2,2) === 4)
    })
    // using the it clause we can write out different samples for our test 
    it('should add -2 + -2 to equal -4',() => {
        assert.ok(add(-2,-2) === -4)
    })
     it('should add 0 + 0 to equal 0',() => {
        assert.ok(add(0,0) ===  0)
    })
})

