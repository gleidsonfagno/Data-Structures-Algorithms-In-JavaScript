function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i]
    if(compliment in numMap && numMap[compliment] !== i) {
        return [numMap[compliment], i]
    }
    numMap[nums[i]] = i
  }

  return []
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);

// nums = [2, 7, 11, 15]
// target = 9

// i = 0 → nums[i] = 2
//   complement = 9 - 2 = 7
//   numMap ainda vazio → salva 2:0

// i = 1 → nums[i] = 7
//   complement = 9 - 7 = 2
//   2 já está em numMap! → achou!
//   retorna [0, 1]
