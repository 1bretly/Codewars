function squareSum(numbers) {
  let sum = 0,
    i = numbers.length
  while (i--) sum += Math.pow(numbers[i], 2)
  return sum
}

console.log(squareSum([0, 1, 2, 3, 4, 5]))