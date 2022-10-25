const hour = 3600000
const min = 60000
const sec = 1000

function past(h, m, s) {
  return h * hour + m * min + s * sec;
}

console.log(past(3, 1, 2));