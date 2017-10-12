
var makeChessBoard = function (boardSize) {

  var size = boardSize,
      counter = 0,
      hashStack = "";

  for (var i = 0; i < size; i++ ){
    var hash = "";
    var hashLine = "";

    while (hash.length < size) {

      if (i % 2 == 0) {

        if (hash.length % 2 == 0) hash = hash + "#";
        else if (hash.length % 2 == 1) hash = hash + " ";

      } else {

        if (hash.length % 2 == 0) hash = hash + " ";
        else if (hash.length % 2 == 1) hash = hash + "#";

      }

      hashLine = hash + "\n";
    }

    hashStack += hashLine;

  }

  console.log(hashStack);

}

makeChessBoard(10);
