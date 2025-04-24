var numberOfPoints = function (arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] >= max) {
        max = arr[i][j];
      }
      if (arr[i][j] <= min) {
        min = arr[i][j];
      }
    }
  }
  let ans = max - min + 1;
  while (max >= min) {
    let falseCnt = 0;
    for (let i = 0; i < arr.length; i++) {
      min >= arr[i][0] && min <= arr[i][1] ? null : falseCnt++;
      falseCnt === arr.length ? ans-- : null;
    }
    min++;
  }
  return ans;
};

let arr = [
  [1, 3],
  [5, 8],
];

console.log(numberOfPoints(arr));
