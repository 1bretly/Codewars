let array = []

function findAverage(array) {
  let total = 0

  if ((array = [])) {
    return 0
  }

  for (let i = 0; i < array.length; i++) {
    total = total + array[i]
  }

  let avg = total / array.length

  return avg
}

console.log(findAverage(array))
