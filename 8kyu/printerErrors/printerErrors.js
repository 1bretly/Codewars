function printerError(input) {
  let errors = 0

  for (i = 0; i < input.length; i++) {
    if (input[i] > "m") {
      errors++
    }
  }
  return errors + "/" + input.length
}
//  javascript recongizes the alphabet, in this case "m" as a value. So anthing greater than "m", the 13th letter of the alphabet, is being logged as an error.