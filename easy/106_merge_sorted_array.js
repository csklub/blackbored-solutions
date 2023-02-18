// You are given two integer arrays nums1 and nums2, sorted in 
// non-decreasing order, and two integers m and n, representing
// the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, 
// but instead be stored inside the array nums1.

function merge(nums1, m, numns2, n) {
  let i = 0
  let j = 0
  let merged = new Array(m+n)
  let mi = 0
  let pick

  while (mi < (m + n)) {
    if (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
        pick = nums1[i++]
      }
      else pick = nums2[j++]
    }
    else if (i < m) {
      pick = nums1[i++]
    }
    else pick = nums2[j++]

    merged[mi++] = pick
  }

  for (mi = 0; mi < merged.length; mi++) {
    nums1[mi] = merged[mi]
  }
}