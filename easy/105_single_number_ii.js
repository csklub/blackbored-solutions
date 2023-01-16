// Given an integer array nums where every element appears
// three times except for one, which appears exactly once.
// Find the single element and return it.
// you must implement a solution with a liner complexity
// and (use only constant extra space -- ignored this for "easy").

function singleNumber(nums) {
  let m = new Map()

  for (let num of nums) {
    let _get = m.get(num)
    if (_get != undefined) {
      m.set(num, _get + 1)
    }
    else m.set(num, 1)
  }

  for (let k of m.keys()) {
    if (m.get(k) == 1) return k
  }
}

// testcases
let tc = [2, 2, 3, 2]
console.log(tc, "->", singleNumber(tc))
