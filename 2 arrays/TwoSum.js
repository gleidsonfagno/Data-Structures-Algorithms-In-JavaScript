function twoSum(nums, target) {
  // Loop throug each number in the list
  for (let i = 0; i < nums.length; i++) {
    // For each numbers, check the rest of the list
    for (let j = i + 1; j < nums.length; j++) {
      // If the current number and the one we're checking add up to the target, return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return []
}

const res = twoSum([2,7,11,15], 9) // 0, 1
const res2 = twoSum([2,3,7,9,2], 11) // 0, 3

console.log(res)
console.log(res2)