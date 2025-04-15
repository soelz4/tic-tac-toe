import View from "./view.js";

// const App = {
//   // Selected HTML Elements
//   $: {
//     // DropDown Menu
//     menu: document.querySelector(".menu"),
//     menuItems: document.querySelector(".items"),
//     resetGameBtn: document.querySelector('[data-id="reset-game-btn"]'),
//     resetDataBtn: document.querySelector('[data-id="reset-data-btn"]'),
//     // Squares
//     squares: document.querySelectorAll('[data-id="square"]'),
//     // Modal
//     modal: document.querySelector('[data-id="modal"]'),
//     modalText: document.querySelector('[data-id="modal-text"]'),
//     modalBtn: document.querySelector('[data-id="modal-btn"]'),
//     // Turn
//     turn: document.querySelector('[data-id="turn"]'),
//   },

//   // State
//   state: {
//     moves: [],
//   },

//   getGameStatus(moves) {
//     const p1Moves = moves
//       .filter((move) => move.playerID === 1)
//       .map((move) => +move.squareID);
//     const p2Moves = moves
//       .filter((move) => move.playerID === 2)
//       .map((move) => +move.squareID);

//     // Winning Patterns
//     const winningPatterns = [
//       [1, 2, 3],
//       [1, 5, 9],
//       [1, 4, 7],
//       [2, 5, 8],
//       [3, 5, 7],
//       [3, 6, 9],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];

//     let winner = null;

//     winningPatterns.forEach((pattern) => {
//       const p1Wins = pattern.every((value) => p1Moves.includes(value));
//       const p2Wins = pattern.every((value) => p2Moves.includes(value));

//       if (p1Wins) winner = 1;
//       if (p2Wins) winner = 2;
//     });

//     return {
//       status: moves.length === 9 || winner != null ? "complete" : "in-progress", // in-progress or complete
//       winner, // 1 or 2 or null
//     };
//   },

//   // INIT
//   init() {
//     App.registerEventListener();
//   },

//   registerEventListener() {
//     // DropDown Menu
//     App.$.menu.addEventListener("click", () => {
//       App.$.menuItems.classList.toggle("hidden");
//     });

//     // Reset Game
//     App.$.resetGameBtn.addEventListener("click", () => {
//       console.log("Reset Game Button Clicked.");
//     });

//     // Reset Data
//     App.$.resetDataBtn.addEventListener("click", () => {
//       console.log("Reset Data Button Clicked.");
//     });

//     // Modal
//     App.$.modalBtn.addEventListener("click", () => {
//       App.state.moves = [];
//       App.$.squares.forEach((square) => square.replaceChildren());
//       App.$.modal.classList.add("hidden");
//     });

//     // Squares
//     App.$.squares.forEach((square) => {
//       square.addEventListener("click", () => {
//         // Check Square Clicked Before or Not
//         const hasMove = (squareID) => {
//           const existingMove = App.state.moves.find(
//             (move) => move.squareID === squareID,
//           );
//           return existingMove !== undefined;
//         };

//         if (hasMove(+square.id)) {
//           console.log("You Can't Click this Square");
//           return;
//         }

//         // Which Player Turn
//         const lastMove = App.state.moves.at(-1);
//         const getOppositePlayer = (playerID) => (playerID === 1 ? 2 : 1);
//         const currentPlayer =
//           App.state.moves.length === 0
//             ? 1
//             : getOppositePlayer(lastMove.playerID);

//         console.log(
//           `Current Player with ${currentPlayer} ID Clicked Square with ${square.id} ID`,
//         );

//         const nextPlayer = getOppositePlayer(currentPlayer);

//         // ICON
//         const squareIcon = document.createElement("i");
//         const turnIcon = document.createElement("i");
//         // Turn Label
//         const turnLabel = document.createElement("p");
//         turnLabel.textContent = `Player ${nextPlayer}, You are Up!`;

//         if (currentPlayer === 1) {
//           squareIcon.classList.add("fa-solid", "fa-x");
//           squareIcon.style.color = "var(--turquoise)";
//           turnIcon.classList.add("fa-solid", "fa-o");
//           turnIcon.style.color = "var(--yellow)";
//           turnLabel.style.color = "var(--yellow)";
//         } else if (currentPlayer === 2) {
//           squareIcon.classList.add("fa-solid", "fa-o");
//           squareIcon.style.color = "var(--yellow)";
//           turnIcon.classList.add("fa-solid", "fa-x");
//           turnIcon.style.color = "var(--turquoise)";
//           turnLabel.style.color = "var(--turquoise)";
//         } else {
//           console.log(`There is no Player with ${currentPlayer} ID`);
//         }

//         // Update Players Turn
//         App.$.turn.replaceChildren(turnIcon, turnLabel);

//         // Update Moves State
//         App.state.moves.push({
//           squareID: +square.id,
//           playerID: currentPlayer,
//         });

//         console.log(App.state.moves);

//         // Add ICON to Square
//         square.replaceChildren(squareIcon);

//         // Check if There is a Winner or Tie Game
//         const game = App.getGameStatus(App.state.moves);
//         console.log(game);
//         if (game.status === "complete") {
//           App.$.modal.classList.remove("hidden");
//           if (game.winner) {
//             App.$.modalText.textContent = `Player ${game.winner} Wins!`;
//           } else {
//             App.$.modalText.textContent = "TIE!";
//           }
//         }
//       });
//     });
//   },
// };

// window.addEventListener("load", () => App.init());

function init() {
  const view = new View();
  console.log(view.$.turn);
}

window.addEventListener("load", init);
