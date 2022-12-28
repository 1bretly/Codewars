function gimme(triplet) {
  const copy = [...triplet]
  const x = triplet.sort((a, b) => a - b)[1]
  return copy.findIndex((el) => el === x)
}
