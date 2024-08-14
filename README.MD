### Agenda listing
1. Component Lifecycle 
2. Unit testing / Writing tests JS. 

### COMPONENT LIFECYCLE 
Referes to the differents stages a component goes through from creation to its removal from the DOM 

1. Mounting : When the component is created and inserted into the DOM 
2. Updating : When a component is re-rendered as a result of changes to its props and also to the state.
3. Unmounting : When the component is removed from the DOM

const [x,setX] = useState('joseph')

----- Mounting ------------------
Functional Component : useEffect(() => { }, []) , define states, ({propname})
Class Based Component (OOP) : componentDidMount(), constructor() , getDerivedStateFromProps() 


----- Updating ------------------
Functional Component : useEffect(() => { }, [x]) , define states, ({propname})
Class Based Component (OOP) : componentDidUpdate() , getDerivedStateFromProps() 


----- unMounting ------------------
Functional Component : useEffect(() => { //write logic at the very end of this function to unsubcribe from different subscription or cleanup }, []) , define states, ({propname})
Class Based Component (OOP) : componentWillUnmount() 


### UNIT TESTING 
Referes to testing where individual units or components are tested. 
The purpose being to validate that each unit of the program works as expected. 


### Tools for testing in JS 
1. Jest
2. Mocha 
3. Jasmine 
4. @testing-library/react

npm install package 
npm install --save-dev mocha chai
npm install --save-dev jest


I have a function that should sum two numbers , write the test to ensure the function is correctly defined 
chai :: test /describe, expect().to.equal() / assert.strictEqual()
### MOCHA KEY WORDS / Functions (jest)
1. Describe : describe() , 1st parameter : a string character (describes the intention of the test , intention of function) , 2nd parameter a callback functionality that defines what is the function supposed to do : 
2. it : it(), 1st paremeter, a string character to indicate what is the expectation of the function, 2nd parameter,  a callback function describing what to expect as the output of the function/test 
3. assert.strictEqual(call_to_the_function_to_test)


Syntax 
describe('',() => {
    it('',() => {
        assert.strictEqual(add(2,2), 4)
    })
    // using the it clause we can write out different samples for our test 
    it('',() => {
        assert.strictEqual(add(-2,-2), -4)
    })
     it('',() => {
        assert.strictEqual(add(0,0), 0)
    })
})


1. Install your desired testing pack.
2. Create the file test script (each file should have its own test unit)
(also observe the naming conventions : filename.test.js)
3. Run the test : npx mocha testfilename
                  npx mocha tests/script.test.js


TEST STH. 























