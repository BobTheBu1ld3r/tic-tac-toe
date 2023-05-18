const game = (function () {
  let player1;
  let player2;
  let gameboard;

  const initialize = () => {
    const Player = function (name, marker) {
      return { name, marker };
    };

    gameboard = (function () {
      "use strict";

      const game = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ];

      const add = ([row, column], marker) => {
        game[row][column] = marker;
      };

      const playMove = (player) => {
        const [row, column] = prompt("What is your move?").split(",");
        if (game[row][column]) {
          alert("already playeed");
          return playMove();
        }
        add([row, column], player.marker);
      };

      const checkState = (player) => {
        const cases = [
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
          [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0],
          ],
        ];

        const norm = game.map((row) =>
          row.map((rowElement) => {
            if (rowElement === player.marker) return 1;
            return 0;
          })
        );

        if (cases.some((sucess) => checkCase(sucess, norm))) handleWin();
        if (!game.flat().includes(null)) handleDraw();

        console.log(game.join("\n"));
      };

      const checkCase = (sucess, norm) => {
        return sucess.join("") == norm.join("");
      };

      const handleWin = () => alert("Win");

      const handleDraw = () => alert("Draw");

      return { playMove, checkState };
    })();

    player1 = new Player(prompt("Name:"), "X");
    player2 = new Player(prompt("Name:"), "O");
  };

  const play = () => {
    let gameOver = false;
    while (gameOver === false) {
      gameboard.playMove(player1);
      gameboard.checkState(player1);
      gameboard.playMove(player2);
      gameboard.checkState(player2);
    }
  };

  return { initialize, play };
})();

console.log(game);

(function () {
  game.initialize();
  while (true) game.play();
})();
