// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// example 1
function toCamelCase(str) {
  if (str === "") {
    return str
  }
  const regEx = /[-_]\w/gi
  let newStr = str.replace(regEx, (nextLetter) => {
    return nextLetter[1].toUpperCase()
  })
  return newStr
}

// example 2
function toCamelCase(str) {
  return str.replace(/[_-]\w/gi, (characters) => characters[1].toUpperCase())
}
