/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length-1,
    index = nums.length - 1;

  let ans = [];
  while (left <= right) {
    if (nums[left] * nums[left] >= nums[right] * nums[right]) {
      ans[index] = nums[left] * nums[left];

      left++;
    } else {
      ans[index] = nums[right] * nums[right];
      right--;
    }
    index--;
  }
  console.log(ans);
  return ans;
};
sortedSquares([-4, -1, 0, 3, 10]);
