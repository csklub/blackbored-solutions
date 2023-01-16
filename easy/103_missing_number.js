// Given an array, nums, containing n distrinct numbers
// in the range [0, n], return the only number in the range
// that is missing from the array

// Method I:
function missingNumber(arr) {
  let sum1 = 0
  let sum2 = 0
  let i = 1
  for (let num of arr) {
    sum1 += num
    sum2 += i
    i += 1
  }

  return sum2 - sum1
}

// Method II: summation rule
function missingNumberSR(arr) {
  let sum1 = 0
  for (let num of arr) {
    sum1 += num
  }
  // summation rule
  let n = arr.length
  let sum2 = n * (n + 1) / 2

  return sum2 - sum1
}

// testcases
let tc = [0, 1, 3, 4, 5, 6, 7]
console.log(tc, "->", missingNumber(tc), missingNumberSR(tc))

tc = [0, 1, 2, 3, 4, 5, 7]
console.log(tc, "->", missingNumber(tc), missingNumberSR(tc))
