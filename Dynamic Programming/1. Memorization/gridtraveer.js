// gridTraveler(2,3)  -> 3

// 1. right, rigth, down
// 2. rith, down, right
// 3. down,  right, right
// ex:
// [s][1][1] // [s][2][]  // [s][][]
// [][][e]  //  [][2][2] //  [3][3][e]

const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};
// brute force
// 0(2^n+m) time
// O(n +m) space

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6

// execulta em memos tempo

// memoized
// O(M * n) time
// O(n  = M) space

const gridTraveler2 = (m, n, memo = {}) => {
  // are the args  in the memo
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler2(18, 18)); // 2333606220
