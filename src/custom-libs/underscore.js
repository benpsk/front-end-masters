const _ = {}; 

// custom _.each implementation
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


// custom _.map implementation [return new array]
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



// _.filter implementation return new array
_.filter = function(arr, callback) {
    // create a new array
    const storage = [];
    // loop through arr

    // using _.each()
    _.each(arr, function(item, i, list) {
        // check if callback return true
        if (callback(item, i, list)) storage.push(item);
    });

    // traditional for loop
    // for (let i = 0; i < arr.length; i++) {
    //     // check if callback return true
    //     if (callback(arr[i], i, arr) === true) {
    //         // if return true, push into array
    //         storage.push(arr[i]);
    //     }
    // }

    // return arr
    return storage;
}



module.exports = _ ;