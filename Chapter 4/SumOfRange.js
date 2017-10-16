/*
  bug:range()
    1.) Wrong answer on negative values.
 */

function range (start, end, byStep) {
  var rangeOfNumber = [];

  var getRange = function (byStep = 1) {
    var term = Math.ceil(Math.abs(end/byStep));
    for (var i = 0; i < term; i++) {
      rangeOfNumber[i] = start + (byStep*i);
    }

  }

  if (byStep) getRange(byStep);
  else getRange();

  return rangeOfNumber;

}

function sum (arr) {
  var sumOfNumber = 0;

  if (Array.isArray(arr)){

    for (var i = 0; i < arr.length; i++) {
      sumOfNumber += arr[i];
    }

  }

  return sumOfNumber;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));
