const myAlert = () => {
    const x = 'Help! I think I found a clue!';
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    }
    return alerter;
}

const funcAlert = myAlert();
const funcAlert2 = myAlert();

funcAlert(); 
// => Help! I think I found a clue! 1
funcAlert();
// => Help! I think I found a clue! 2

funcAlert2(); 
// => Help! I think I found a clue! 1
funcAlert2();
// => Help! I think I found a clue! 2


const newClue = name => {
    const length = name.length;

    return weapon => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    }
}

const didGreenDoItWithA = newClue('Green');
didGreenDoItWithA('canddlestrit');


function countClue() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { return n =0; }
    }
}

const counter1 = countClue();
const counter2 = countClue();

console.log(counter1.count());  // => 1
console.log(counter1.count());  // => 2 
console.log(counter1.reset());  // => 0


console.log(counter2.count());  // => 1
console.log(counter2.count());  // => 2 
console.log(counter2.reset());  // => 0


const findSomeone = () => {
    const speak = () => {
        console.log(who);
    }
    let who = 'Why hello there, Prof Plum!';
    return speak;
}
const someoneSpeak = findSomeone();
console.log(someoneSpeak());
// => Why helo there, Prof Plum! // because when we call findSomeone() it define who eventhough it below speak func


// make timer
const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => elapsed;

    const increase = () => elapsed++;

    setInterval(increase, 1000);

    return stopwatch;
}

let timer = makeTimer();
// will return second


// testing curring
const abc = (a, b) => [a, b];
var curried = _.curry(abc);
curried(1)(2);
// => [1, 2];



const consider = name => `I think it could be... ${name}`;

const exclaim = statement => `${statement.toUpperCase()}!`;

const blame = _.compose(consider, exclaim);

blame('you');