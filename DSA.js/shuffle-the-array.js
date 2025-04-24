let arr = [1, 1, 2, 2];
let ans = [];
let len = Math.floor(arr.length / 2);
let i = 0;
while (i < len) {
  ans.push(arr[i]);
  ans.push(arr[len + i]);
  i++;
}
console.log(ans);
