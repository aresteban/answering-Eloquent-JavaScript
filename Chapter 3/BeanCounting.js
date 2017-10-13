function countB (string) {

  var count = countChar(string ,"B");

  return count;
}

function countChar (string, findChar) {
  var found = 0;

  for (var i = 0; i < string.length; i++) {
    if (typeof findChar == "undefined") found = string.length
    else if (string.charAt(i) == findChar) found++;
  }

  return found;
}

console.log(countB("BeamBoostingBomberBoots"));
console.log(countChar("BeamBoostingBomberBoots"));
