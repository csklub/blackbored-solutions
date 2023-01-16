// isPalindrome - returns true if a number is a "palindrome"
// e.g. 121 -> true, 4884 -> true
function isPalindrome(x) {
  let rev = 0
  let initX = x

  while (x > 0) {
    rev = rev * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return rev == initX
}

// testcases
let tc = 100
console.log(tc, "->", isPalindrome(tc))
tc = 121
console.log(tc, "->", isPalindrome(tc))
tc = 838
console.log(tc, "->", isPalindrome(tc))
tc = 454
console.log(tc, "->", isPalindrome(tc))
