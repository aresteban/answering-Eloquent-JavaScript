var counter = 1,
    end = 100;

while (counter <= end) {

  if (counter % 3 == 0 && counter % 5 == 0) console.log("FizzBuzz");
  else if (counter % 3 == 0) console.log("Fizz");
  else if(counter % 5 == 0) console.log("Buzz");
  else console.log(counter);

  counter++;
}
