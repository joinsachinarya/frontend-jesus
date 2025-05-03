

function createFunctionArrya() {
  var arr = []
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i
    })
  }
  return arr;
}

const functions = createFunctionArrya()
console.log(functions[0]())
console.log(functions[1]())
console.log(functions[2]()) 
// my answer was: // 2, 2, 2
// correct answer : 3, 3, 3

