var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;

  let rotate = [];
  for (let i = 0; i < n; i++) {
    rotate[i] = nums[(i - k + n) % n];
  }

//   copiar os dados do rotaite
  for (let i = 0; i < n; i++) {
    nums[i] = rotate[i]
  }

  return nums
};

Input: (nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
Output: [5, 6, 7, 1, 2, 3, 4];
console.log(rotate(nums, k))

// Passo 1: inverter tudo →
// Passo 2: inverter os k primeiros →
// Passo 3: inverter os últimos n - k →

// function rotate(nums, k) {
//     let n = nums.length;
//     // Create a new array to store rotated elements
//     let rotated = new Array(n);

//     // Place each element in its new position
//     for (let i = 0; i < n; i++) {
//         rotated[(i + k) % n] = nums[i];
//     }

//     // Copy the rotated elements back to original array
//     for (let i = 0; i < n; i++) {
//         nums[i] = rotated[i];
//     }
// }

// Input: (nums = [1, 2, 3, 4, 5, 6, 7]), (k = 3);
// Output: [5, 6, 7, 1, 2, 3, 4];
// console.log(rotate(nums, k))
