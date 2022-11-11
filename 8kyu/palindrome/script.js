// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(str) {
  let lowStr = str.toLowerCase()
  let reverseStr = lowStr.split("").reverse().join("")
  return reverseStr === lowStr
}
