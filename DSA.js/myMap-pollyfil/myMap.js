// // pollyFills: it adds the missing methods/feature in the code.
// // example:
let arr = [1, 2]
a: console.log(arr.map(i => i * 2)) // this works,  output : [2,4]  
b: console.log(arr.myMap(i => i * 2)) // this does not works, 'TypeError: arr.myMap is not a function'

// to make b work we need a pollyFills for myMap 
const pollyFillFormyMap = function (callback) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i]))
    }
    return res;
}

//  now assign pollyFillFormyMap  into Array.prototype 
Array.prototype.myMap = pollyFillFormyMap;

b: console.log(arr.myMap(i => i * 2)) // now  this works,  output : [2,4]  