var zeroFilledSubarray = function (nums) {
  let res = 0;
  let i = 0;

  while (i < nums.length) {
    let count = 0;
    while (i < nums.length && nums[i] == 0) {
      count += 1;
      i += 1;
      res += count;
    }
    i += 1;
  }

  return res;
};

Input: nums = [1, 3, 0, 0, 2, 0, 0, 4];
Output: 6;

console.log(zeroFilledSubarray(nums))

Input: nums = [0, 0, 0, 2, 0, 0];
Output: 9;

console.log(zeroFilledSubarray(nums))

Input: nums = [2, 10, 2019];
Output: 0;

console.log(zeroFilledSubarray(nums))

var zeroFilledSubarray = function (nums) {
  let res = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count += 1;
    } else {
      count = 0;
    }
    res += count;
  }
  return res
};

Input: nums = [1, 3, 0, 0, 2, 0, 0, 4];
Output: 6;

console.log(zeroFilledSubarray(nums))

Input: nums = [0, 0, 0, 2, 0, 0];
Output: 9;

console.log(zeroFilledSubarray(nums))

Input: nums = [2, 10, 2019];
Output: 0;
console.log(zeroFilledSubarray(nums))