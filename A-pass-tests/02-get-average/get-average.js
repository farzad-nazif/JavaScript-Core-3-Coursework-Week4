// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let sum = 0;
  let count = 0;
  numbers.forEach((item) => {
    if (typeof item === "number") {
      sum += item;
      count++;
    }
  });
  return sum / count;
}

module.exports = average;
