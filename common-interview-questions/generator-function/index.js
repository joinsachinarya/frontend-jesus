// generator function are javascript function which return an iterator object , unlike normal function which
// returns a single or no value. generator function are declared with * sign after the function keyword.
// these generator function yields multiple values sequentially one at a time by using yield keyword inside them.
// when generator function yield a value it pauses until we call returned iterator object's next() method.


function* myGeneratorFun() {
    yield 1;
    yield 2;
    yield 3;
    return "DONE"
}


function* infiniteNum() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}
const value = myGeneratorFun()
// const value = infiniteNum()

// console.log(value.next(), value.next(), value.next(), value.next(), value.next())
for (let val of value) {
    // console.log(value.next())  // incorrect 
    console.log(val)
}



