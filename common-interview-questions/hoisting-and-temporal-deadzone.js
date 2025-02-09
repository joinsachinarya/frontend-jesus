// <---- Temporal DeadZone -----> //


// A Temporal DeadZone of a variable or function or class is , 
// a area of block where that variable or function or class is not accessible until the moment 
// the js engine completely initialize and assign it's value 


// <---- Hoisting -----> //
// Hoisting is a default behavior of javascript to give higher precedence to the declaration part of 
// function, variable , or class while execution



console.log(var3)

var var1 = 'a'  // var1's Temporal DeadZone ends at first line of the block
let var2 = 'b'  // var2's  and var3's Temporal DeadZone ends after initialized
const var3 = 'c' 

let var4; // var4's TDZ ends here
console.log(var4)
var4 = 'd'




var fun = () => {  // arrow function's TDX
    return 'x'
}