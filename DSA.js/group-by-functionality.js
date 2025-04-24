let arr = [
  ["Id", "course", "score"],
  [1, "A", 10],
  [1, "B", 20],
  [2, "A", 30],
  [3, "C", 40],
  [4, "D", 10],
  [4, "A", 10],
  [4, "B", 20],
  [4, "B", "null"],
];

function GroupBy(field) {
  let obj = {};
  for (let i = 1; i < arr.length; i++) {
    if (field === "id") {
      j = 0;
    } else if (field === "course") {
      j = 1;
    } else {
      j = 2;
    }
    if (obj[arr[i][j]] !== undefined) {
      obj[arr[i][j]] += 1;
    } else {
      obj[arr[i][j]] = 1;
    }
  }
  console.log(obj);
}

GroupBy("score");
