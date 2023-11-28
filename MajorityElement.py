
def majorityElement(nums):
  max_count = 1
  majority = 0
  for x in (y for y in nums if max_count < len(nums)/2):
    count = nums[0]
    for y in nums:
        if x == y:
            count+=1
  return majority


print(majorityElement([3,2,3]))