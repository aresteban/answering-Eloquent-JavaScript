var myArray = [21,99,42,55,57,23,10,7,75];

function reverseArray (arr) {
  var arrayLength = arr.length,
      counter = 0,
      reversed = [];

  for (var i = arrayLength-1; i >= 0; i--) {
    reversed[counter] = arr[i];
    counter++;
  }

  return reversed;
}


function reverseArrayInPlace (arr) {
  return reverseArray(arr);
}


console.log(reverseArray(myArray)); // Reverse the array.
console.log(myArray); // Check if original value is unchanged.

console.log(reverseArrayInPlace(myArray)); // Second reverse that will modify value.


// Textbook question: Which variant do you think is most useful in situation? which is more efficient?

// Although creating a 2nd reversing function that will modify the original variable
// would look cooler with its more complex formula. More complex code == more room for error.
// So why not re-use earlier defined funcitons If I can.
// So for me the more efficient answer is to return a value.
// The reason for this is that I can re-use it if I needed a reversing
// function that modifies the original array and I no longer need to write complex computations.
// Also following the rule of 'immutable variables' is a plus.
