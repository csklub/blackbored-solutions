// Write a function to find the longest common prefix string
// amongst an array of string.
// If there is no common prefix, return an empty string.

function longestCommonPrefix(strs) {
  let prefix = ""
  for (let i in strs[0]) {
    let prefixChar = strs[0][i]
    for (let str of strs) {
      if (str[i] != prefixChar) {
        return prefix
      }
    }
    prefix += prefixChar
  }
  return prefix
}

// testcases
let tc = ["flower", "flow", "flight"]
console.log(tc, "->", longestCommonPrefix(tc))

tc = ["bread", "break", "breast", "breed"]
console.log(tc, "->", longestCommonPrefix(tc))
