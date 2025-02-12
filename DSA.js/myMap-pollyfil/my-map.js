const myMap = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]);
  }
  return arr;
}
function intoTwo(x) {
  return x * 2
}
const result = myMap([1, 3], intoTwo)
console.log(result)
Array.prototype.myMap = function(fn){
  const newArray = [];
  console.log(this)
  for(let i = 0; i< this.length;  i++){
    newArray.push(fn(this[i]))
  }
  return newArray;
}
const res = [2, 3, 4].myMap(intoTwo);
console.log(res)