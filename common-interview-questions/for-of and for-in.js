// The `for...of` loop iterates over the values of iterable objects (e.g., arrays, strings, maps), while the `for...in` loop iterates over the enumerable property keys of objects, including arrays, but is best used for plain objects.

let arr = [1, 2];
for (let val of arr) {
    console.log(val);
}

for (let val in arr) {
    console.log(val); // 0, 1 (indices)
    console.log(arr[val]); // 1, 2 (values)
}

let obj = { 1: 1, 2: 2 };

// for (let val of obj) {
//     console.log(val); // TypeError: obj is not iterable
// }

for (let val in obj) {
    console.log(val); // 1, 2 (keys)
    console.log(obj[val]); // 1, 2 (values)
}