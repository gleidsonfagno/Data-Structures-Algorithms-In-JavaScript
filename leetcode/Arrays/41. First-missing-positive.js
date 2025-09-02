var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // descartamos numeros que sao negativos mudado eles para zeros
    if (nums[i] < 0) {
      nums[i] = 0;
    }
    // console.log(nums[i]);
  }
  // passo 2: marcar presença
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]);
    if (val >= 1 && val <= nums.length) {
      //   console.log("true");

      if (nums[val - 1] > 0) {
        nums[val - 1] *= -1;
      } else if (nums[val - 1] === 0) {
        nums[val - 1] =  -(nums.length + 1);
      }
    }
    // console.log(nums[i]);
  }

  //   solução
  for (let i = 1; i <= nums.length + 1; i++) {
    if (nums[i - 1] >= 0) {
      // console.log(i);
      return i;
    }
  }

  return nums.length + 1;
};

console.log(firstMissingPositive([1,2,0])); // 3
console.log(firstMissingPositive([3,4,-1,1])); // 2
console.log(firstMissingPositive([7,8,9,11,12])); // 1