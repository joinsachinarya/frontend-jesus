
let arr = [1, 2, 3], size = 1
// [[1], [2], [3]]

let arr2 = [1, 2, 3, 4, 5], size2 = 2;
// [[1, 2], [3, 4], [5]]


function sol(arr, size) {
  let ans = []
  let round = Math.ceil(arr.length / size)
  let i = 0;
  while (round) {
    let element = []
    let tempSize = size;
    while(tempSize){
      if(arr[i]){
        element.push(arr[i])
      }
      tempSize--;
      i++;
    }
    ans.push(element)
    round--;
  }
  return ans;
}

console.log(sol([], 1))// TC O(3n) / O(n)
