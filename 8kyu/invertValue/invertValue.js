// Example 1
function invert(array) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    let inverts = array[i] * -1;
    newArray.push(inverts);
  }
  return newArray;
}
//  Example 2
const invert = (array) => array.map((num) => -num)

// Example 3
function invert(array) {
  var newArr = []
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i])
  }
  return newArr
}