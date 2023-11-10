// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

var merge = function(nums1, m, nums2, n) {
    let y = 0;
    for(let x = m;x<nums1.length && y<nums2.length;x++){
        nums1[x] = nums2[y++];
    }
    nums1 = nums1.sort()
};

merge(nums1, m, nums2, n);
console.log(nums1)