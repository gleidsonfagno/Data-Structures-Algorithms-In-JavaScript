var removeDuplicates = function(nums) {
    let l = 1
    for(let r = 0; r < nums.length; r++){
        // console.log(nums[r])
        if(nums[r] != nums[l - 1]){
            // console.log(nums[r])
            nums[l] = nums[r]
            l++
        }
    }
    // console.log(l)
    return l
};
nums = [0,0,1,1,1,2,2,3,3,4]
// removeDuplicates(nums)

console.log(removeDuplicates(nums))