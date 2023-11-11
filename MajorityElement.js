/*
169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that 
the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max_count = 1
    let majority = 0;
    for(let x =0;x<nums.length && max_count < nums.length/2;x++){
        let count = nums[0]
        for(let y=0;y<nums.length;y++){
            if(nums[x] === nums[y]){
                count++
            }
        }
        if(count > max_count){
            max_count = count;
            majority = nums[x]
        }
    }
    return majority;
};

let nums = [3,2,3]
let majority = majorityElement(nums);

console.log(JSON.stringify(nums))
console.log(majority)