// EBEN, INCOMPLETE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var search = function(nums, target) {
    if (nums.length <= 2) return nums.indexOf(target)
  // a, b, and c are indices
  let a = 0
  let b = nums.length - 1
  let c = Math.floor(nums.length / 2)

  if (nums[a] === target) return a
  if (nums[b] === target) return b
  if (nums[c] === target) return c

  // the conditional originally was while (b > a)
  while (c < a) {
    // if mid is greater than start
    if (nums[c] > nums[a]) {
        if ((target > nums[a]) && (target < nums[c])) {
            b = c
            c = a + Math.floor((b - a) / 2)
        } else {
            a = c
            c = a + Math.floor((b - a) / 2)
        }
    } else {
        if ((target > nums[c]) && (target < nums[b])) {
            a = c
            c = a + Math.floor((b - a) / 2)
        } else {
            b = c
            c = a + Math.floor((b - a) / 2)
        }
    }

    if (nums[a] === target) return a
    if (nums[b] === target) return b
    if (nums[c] === target) return c

    // if (a === c) {
    //     return -1
    // }
  }

  return -1
}

// const nums = [8,9,0,1,3,4,6]
const nums = [1,2,3,4,5,6,7,8,9]
const target = 3

console.log(search(nums, target))
