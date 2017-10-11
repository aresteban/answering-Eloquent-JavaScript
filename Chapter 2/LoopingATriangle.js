var triangle = "",
    counter = 1,
    limit = 7;

while (counter <= limit) {
  var hash = "";

  while (hash.length < counter) {
    hash = hash + "#"
  }

  triangle = triangle + hash + "\n"
  counter++
}

console.log(triangle);
