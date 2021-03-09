let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0
let numberOfItems = 0
let array = []
let k = 0

rl.on('line', function (line) {

  if (lineIndex == 0) {

    numberOfItems = parseInt(line)

  } else if (lineIndex == 1) {

    array = line.split(' ').map(item => parseInt(item)).sort(function (a, b) {
      return a - b;
    })

  } else {

    k = parseInt(line)

    let occurrences = []

    for (let i = 0; i < numberOfItems; i++) {
      let currentNumber = array[i]
      if (occurrences[currentNumber]) {
        occurrences[currentNumber] = [currentNumber, occurrences[currentNumber][1] + 1]
      } else {
        occurrences[currentNumber] = [currentNumber, 1]
      }
    }

    const occurrencesAsDuples = occurrences // [number, # of occurrences]
      .filter(function (el) { return el != null })
      .sort(function (a, b) { return b[1] - a[1] })

    let outputArray = []
    for (let j = 0; j < k; j++) {
      outputArray.push(occurrencesAsDuples[j][0])
    }

    console.log(outputArray.join(' '))

    rl.close()

  }

  lineIndex += 1

})