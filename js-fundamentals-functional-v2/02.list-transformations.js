// use underscore.js library // use const instead of var
// const _ = require('../src/libs/underscore');

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



// custom _.each implementation
const _ = {}; // use const

_.each = function(list, callback) {
    if (Array.isArray(list)) {
        // loop through array
        for (var i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list);
        }
    } else {
        // loop through object
        for(var key in list) {
            // call the callback with a list item
            callback(list[key], key, list);
        }
    }
};



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




_.map = function(list, callback) {
    var storage = [];

    // for (var i = 0; i < list.length; i++) {
    //     storage.push(callback(list[i], i, list));
    // }

    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    })
    return storage;

};


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

