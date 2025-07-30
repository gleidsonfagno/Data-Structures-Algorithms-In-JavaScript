var majorityElement = function (nums) {
  let count = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      res = nums[i];
    }

    if (nums[i] === res) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([6, 6, 6, 7, 7]));
console.log(majorityElement([6, 5, 5]));
