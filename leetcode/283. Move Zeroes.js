var moveZeroes = function (nums) {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] != 0) {
      nums[l] = nums[r];
      //   console.log(nums[r], l);
      if (l !== r) {
        // console.log(l, r);
        // console.log("segundo log: " + nums[r])
        nums[r] = 0
      }
      l++;
    }
  }
  
  return nums;
};

nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
moveZeroes(nums);



