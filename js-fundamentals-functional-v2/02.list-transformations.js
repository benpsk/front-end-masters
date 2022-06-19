// use underscore.js library // use const 
// const _ = require('../src/libs/underscore');

// use custom implementation of underscore js
const _ = require('../src/custom-libs/underscore');

// list transformations
function CreateSuspectObjects(name) {
    return {
      name: name,
      color: name.split(' ')[1],
      speak() { 
        console.log("my name is ", name); 
      }
    };
};
  
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

for(let i = 0; i < suspects.length; i++){
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}

console.log(suspectsList);



// looping with _.each
function CreateSuspectObjects(name) { 
    return { 
        name: name,   
        color: name.split(' ')[1],   
        speak() {log("my name is ${name}");}
    }; 
}; 
  
var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White']; 

var suspectsList = [];

_.each(suspects, function(name) {
    suspectsList.push(CreateSuspectObjects(name)); 
});

console.log(suspectsList);



// tetsing custom libs underscore [array]
_.each(['sally', 'geogie', 'porgie'], function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1]);
    } else {
        console.log(name, 'is the oldest');
    }
})

// custom _.each object [object]
_.each({name: 'John', age: 12, 'occupation': 'Monk'}, function(name, i, list) {
    console.log(name);
})



// testing _.map
var val = _.map([1, 2, 3], function(val) { return val + 1;});
console.log(val);
// => [2, 3, 4]



// _.map usage (use const)
var weapons = ['candlestick', 'lead pipe', 'revolver'];

var makeBroken = function(item){
  return `broken ${item}`;
};

// var brokenWeapons = [];

// for(let i = 0; i < weapons.length; i++) {
//     // traditional
//     brokenWeapons.push(`broken ${weapons[i]}`);

//     // call with makeBroken func
//     brokenWeapons.push(makeBroken(weapons[i]));
// }

// using _.map lib
var brokenWeapons = _.map(weapons, makeBroken);

console.log(weapons);
console.log(brokenWeapons);

