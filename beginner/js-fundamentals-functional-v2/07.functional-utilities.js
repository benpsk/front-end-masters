
// import custom underscore
const _ = require('../src/custom-libs/underscore');


// using libraray
// const _ = require('../src/libs/underscore');

var abc = (a, b, c) => [a, b, c];

var curried = _.curry(abc);

console.log(curried(1)(2)(3));
// => [1, 2, 3]

console.log(curried(1, 2) (3));
// => [1, 2, 3,]


const consider = name => `I think it could be... ${name}`;

const exclaim = statement => `${statement.toUpperCase()}!`;

const blame = _.compose(consider, exclaim);

blame('you');
// => 'I think it could be... YOU!'