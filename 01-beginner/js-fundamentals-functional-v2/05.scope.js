// for nodejs (cli)
// var expect = require('expect.js');

describe('Scope Exercises', function() {

    var ACTUAL;

    // this resets the value of ACTUAL (to null) before each test is run
    beforeEach(function() {
        ACTUAL = null;
    });

    it ('a function has access to its own local scope variables', function () {
        var fn = function () {
            var name = 'inner';
            ACTUAL = name;
        };
        fn();
        expect(ACTUAL === 'inner').to.be.true;
    });

    it ('inputs to a function are treated as local scope variable', function () {
        var fn = function (name) {
            ACTUAL = name;
        };
        fn('inner');
        expect(ACTUAL === 'inner').to.be.true;
    });

    it ('blocks scope can be created with let', function () {
        var fn = function() {
            var where = 'outer';
            {
                let where = 'inner';
            }
            ACTUAL = where;
        };
        fn();
        expect(ACTUAL === 'outer').to.be.true;
    });

    it ('a function has access to the variable contained within the same scop that function was created in ', function() {
        var name = 'outer';
        var fn = function() {
            ACTUAL = name;
        };
        fn();
        expect(ACTUAL === 'outer').to.be.true;
    });

    it ('a afunction\'s local scope variables are not available anywhere outside that function', function() {
        var firstFn = function() {
            var localToFirstFn = 'inner';
        };
        firstFn();
        expect(function() {
            ACTUAL = localToFirstFn;
        }).to.throw;
        expect(ACTUAL === null).to.be.true;
    });

    it ('a function\'s local scope variables are not available anywhere outside that function, regardless of the context it\'s called in', function() {
        var firstFn = function() {
            var localToFirstFn = 'first';
            secondFn();
        };
        var secondFn = function() {
            ACTUAL = localToFirstFn;
        };
        expect(function() {
            secondFn();
        }).to.throw;
        expect(function() {
            firstFn();
        }).to.throw;
        expect(ACTUAL === null).to.be.true;
    });

    it ('if an inner and an outer variable share the same name, the name is referenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope vairable inacccassible from anywhere within the inner function block', function() {
        var someName = 'outer';
        var fn = function() {
            var someName = 'inner';
            ACTUAL = someName;
        }
        fn();
        expect(ACTUAL === 'inner').to.be.true;
    });

    it ('if an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used', function() {
        var someName = 'outer';
        var fn = function() {
            var someName = 'inner';
        }
        fn();
        ACTUAL = someName;
        expect(ACTUAL === 'outer').to.be.true;
    });

    it('a new variable scope is created for every call to a functin, as exemplified with a counter', function() {
        var fn = function() {
            var innerCounter = innerCounter || 10;
            innerCounter = innerCounter + 1;
            ACTUAL = innerCounter;
        };
        fn();
        expect(ACTUAL === 11).to.be.true;
        fn();
        expect(ACTUAL === 11).to.be.true;
    });

    it('a new variable scope is created for each call to a function, as exemplified with uninitialized string variables', function() {
        var fn = function() {
            var localVariable;
            if (localVariable === undefined) {
                ACTUAL = 'alpha';
            } else if (localVariable === 'initialized') {
                ACTUAL = 'omega';
            }
            localVariable = 'initialized';
        };
        fn();
        expect(ACTUAL === 'alpha').to.be.true;
        fn();
        expect(ACTUAL === 'alpha').to.be.true;
    });

    it('an inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names', function() {
        var outerName = 'outer';
        var fn = function() {
            var innerName = 'inner';
            ACTUAL = innerName + outerName;
        };
        fn();
        expect(ACTUAL === 'innerouter').to.be.true;
    });

    it('between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function', function() {
        var outerCounter = 10;
        var fn = function() {
            outerCounter = outerCounter + 1;
            ACTUAL = outerCounter;
        };
        fn();
        expect(ACTUAL === 11).to.be.true;
        fn();
        expect(ACTUAL === 12).to.be.true;
    });      


    it('the rule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned', function() {
        var outerFn = function() {
            var counterInOuterScope = 10;
            var innerIncrementingFn = function() {
                counterInOuterScope = counterInOuterScope + 1;
                ACTUAL = counterInOuterScope;
            };
            innerIncrementingFn();
            expect(ACTUAL === 11).to.be.true;
            innerIncrementingFn();
            expect(ACTUAL === 12).to.be.true;
            
            // here, we retain a reference to the newly created inner function for later, by assigning it ot the global scope (window)
            window.retainedInnerFn = innerIncrementingFn;
        };
        // before we run outerFn, there will be no innerFun exported to the global scope
        expect(window.retainedInnerFn).to.equal.undefined;
        outerFn();
        expect(window.retainedInnerFn).to.be.a('function');
        window.retainedInnerFn();
        expect(ACTUAL === 13).to.be.true;
    });

});