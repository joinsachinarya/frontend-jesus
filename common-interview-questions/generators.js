// normal function can returns single value or undefined, but generators function can return 
// more than one value , one after another , on demand. It also confirms the Iterable Protocol
// that means it's resulted value can be used in for of loop.


function* myGenFun() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'd';
}

const genFun = myGenFun()

console.log(myGenFun().next())
console.log(myGenFun().next())
console.log(myGenFun().next())
console.log(myGenFun().next())

console.log(genFun.next())
console.log(genFun.next())
console.log(genFun.next())
console.log(genFun.next())
console.log(genFun.next())

for( gen of genFun){
    console.log(gen);
}




// PS: async await  are transpiled into generator behind the scene  for older browser


function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647;
      yield value;
    }
  
  };
  

const genSo = pseudoRandom(1)
console.log(genSo.next())
console.log(genSo.next())
console.log(genSo.next())
console.log(genSo.next())
console.log(genSo.next())