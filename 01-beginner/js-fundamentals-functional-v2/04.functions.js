const _ = require('../src/custom-libs/underscore');

// use const 
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const suspects = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
})
console.log(suspects);


const suspectsName = _.map(suspects, suspectObj => suspectObj.name );
console.log(suspectsName);
//  [
//     'Miss Scarlet',
//     'Reverend Green',
//     'Colonel Mustard',
//     'Professor Plum'
//   ]

const createTuple = (a, b, c, ...d) => {
    return [[a, c], [b, d]];
}

let tupleResult = createTuple('It', 'be', 'could', 'anyone', 'no one');
console.log(tupleResult);
// => [['It', 'could'], ['be', ['anyone', 'no one']]];

// notes => arguments is array like object => not array
let tupleArgument = (a, b, c, d) => {
    // console.log(arguments); // []
    return [[a, c], [b, d]];
}

tupleArgument('It', 'be', 'could', 'anyone', 'no one');


let allArgument = (a, b, c, ...d) => {
    // console.log(arguments); 
    // =>  ['It', 'be', 'could', 'anyone', 'no one']
    return [[a, c], [b, d]];
}

allArgument('It', 'be', 'could', 'anyone', 'no one');


const add = function(a, b = 2) {
    console.log(arguments);
    // logs [3]
    return a + b;
}
const addResult = add(3);
console.log(addResult);
// => 5


// rewrite in ES5
const addES5 = function(a, b) {
    b = b || 2;
    console.log(arguments);
    // logs [3]
    return a + b;
}
const addES5Result = addES5(3);
console.log(addResult);
// => 5


// array-lik object into array ES5
const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
}
const constructResult = constructArr('was', 'it', 'in');
console.log(constructResult);


// array-lik object into array ES6
// argument pseudo-array 
const constructArrES6 = function() {
    // const arr = Array.from(arguments);
    const arr = _.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
}
const constructArrES6Result = constructArrES6('was', 'it', 'in');
console.log(constructArrES6Result);