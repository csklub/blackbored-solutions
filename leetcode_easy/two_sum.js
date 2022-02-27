/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
