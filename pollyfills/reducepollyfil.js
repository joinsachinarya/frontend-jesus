
function myReduce(callback, initial) {
  let context = this;
  let startingIndex;
  let acc;
  if (initial) {
      acc = initial
      startingIndex = 0;
  } else {
      acc = context[0];
      startingIndex = 1
  }
  for (let i = startingIndex; i < context.length; i++) {
      acc = callback(acc, context[i], i, context)
  }
  return acc;
}

Array.prototype.myReduce = myReduce

let arr = [1, 2, 4]
console.log(arr.myReduce((acc, curr) => {
  acc *= curr;
  return acc;
}), 0)