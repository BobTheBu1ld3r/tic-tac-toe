const game = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function add([row, column], marker) {
  if (Math.abs(row) > 2 || Math.abs(column) > 2)
    return console.log("position out of bounds");
  game[row][column] = marker;
}

add([1, 2], "X");

console.log(game);

debugger;
