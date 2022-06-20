// import custom underscore
// const _ = require('../src/custom-libs/underscore');

// using libraray
const _ = require('../src/libs/underscore');


var ifElse = (condition, isTrue, isFalse) => {
    // print nothing because isTrue return function and never call it.
    return condition ? isTrue : isFalse;
};

ifElse(true, 
    () => { console.log(true); },
    () => { console.log(false); }
);



var ifElse = (condition, isTrue, isFalse) => {
    // isTrue() call function so, log (true)
    return condition ? isTrue() : isFalse();
};

ifElse(true, 
    () => { console.log(true); },
    () => { console.log(false); }
);



var increment = function(n){ return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func){ return func(n); };

console.log(doMathSoIDontHaveTo(5, square)); //25

console.log(doMathSoIDontHaveTo(4, increment)); // 5a



// ES6
var increment = n => n + 1;
var square = n => n * n;
var doMathSoIDontHaveTo = (n, func) => func(n);
console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(4, increment));



var ifElse = (condition, isTrue, isFalse, p) => {
    return condition ? isTrue(p) : isFalse(p);
};

ifElse(
    true, 
    () => { console.log(true); },
    () => { console.log(false); },
    'Hi'
);


// ES6
var ifElse = (condition, isTrue, isFalse, ...args) => {
    console.log(args) // ['Hi', 'Hello', 'Bye'];
    console.log(...args) // Hi Hello Bye;
    return condition ? isTrue(...args) : isFalse(...args);
};

ifElse(true, 
    (...args) => { console.log(...args); },
    (args) => { console.log(args); },
    'Hi',
    'Hello',
    'Bye'
);


// before ...args [rest operator, spread operator]
var ifElse = (condition, isTrue, isFalse) => {
    var args = [].slice.call(arguments,3) 
    console.log(args);
    return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
};
  
var logTrue = (msgs) => { console.log(true); };
var logFalse = (msgs) => { console.log(true); };

ifElse(true, logTrue, logFalse, 'A', 'B');


// reduce custom implementation 
let red = _.reduce([1,2,3], (v, sum) => v + sum, 0);
console.log(red);



const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


// find rooms falses
// const notInRoom = suspect => {
    
//     const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {

//         if (memo[key] === false) memo.push(room);
//         return memo;
//     }, []);
//     return emptyRooms;
// }


const notInRoom = suspect => {
    
    const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
       
        if (room === false) memo.push(room);
        return memo;
    }, []);
    return emptyRooms;
}


const notInRooms = _.map(newDevelopment, notInRoom) ;
// [
//     ['kitchen', 'ballroom', 'billiard room'],
//     ['kitchen', 'ballroom']
// ]
console.log(notInRooms);

// const result = _.intersection(notInRooms);
// console.log(result);
// => ['kitchen', 'ballroom' ,.....];