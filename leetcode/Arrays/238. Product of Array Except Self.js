var productExceptSelf = function(nums) {
    let answer = []
    answer[0] = 1

    for(let i = 1; i < nums.length; i++){
        answer[i] = answer[i - 1] * nums[i - 1]
    }
    

    let suffix = 1

    for(let i = nums.length - 1; i >= 0; i--){
        answer[i] = answer[i] * suffix
        suffix *= nums[i]
    }

    return answer;
};

// ex 1
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
console.log(productExceptSelf(nums))

// ex 2
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

console.log(productExceptSelf(nums))

// Calcula todos os prefixos e guarda no res.

// Calcula todos os sufixos de trás pra frente multiplicando no res.

// O resultado é o produto de todos os elementos, exceto o próprio, para cada índice.