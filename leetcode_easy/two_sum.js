/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} - the indexes
 */
var twoSum = function(nums, target) {
    let m = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let y = target - nums[i];
        
        if (m.has(y)) {
            return [ m.get(y), i ];
        }
        m.set(nums[i], i);
    }
};

// test cases
let testCase = [10, 3, 4, 6, 9, 20]
console.log(testCase, 10, "->", twoSum(testCase, 10))
