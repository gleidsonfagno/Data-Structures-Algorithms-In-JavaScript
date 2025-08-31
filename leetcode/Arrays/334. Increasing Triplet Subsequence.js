// flahei nesse  eexerecicio mas fiquei com o apredizado. 
var increasingTriplet = function(nums) {
    // Initialize the first and second variables to infinte
    let first = Infinity;
    let second = Infinity;

    // Iterate through the numbers in the array
    for (let num of nums) {
        if (num <= first) {
            // Update first to the smallest number found so far
            first = num;
        } else if (num <= second) {
            // Update second to the next smallest number after first
            second = num;
        } else {
            // If the current number is greater than both first and second,
            // we have found the triplet
            return true;
        }
    }
    return false;
};
nums = [1, 2, 3, 4, 5];

console.log(increasingTriplet(nums));

nums = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums));

nums = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(nums));

