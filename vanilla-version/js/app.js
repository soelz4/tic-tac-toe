import Store from "./store.js";
import View from "./view.js";

const players = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
  },
];

function init() {
  const view = new View();
  const store = new Store("live-t3-storage-key", players);

  // Current Tab State Changes
  store.addEventListener("statechange", () => {
    view.render(store.game, store.stats);
  });

  // Different Tab State Changes
  window.addEventListener("storage", () => {
    console.log("State Changed From Another Tab");
    view.render(store.game, store.stats);
  });

  // First Load of Document
  view.render(store.game, store.stats);

  view.bindGameResetEvent(() => {
    store.reset();
    console.log("New Game Started");
  });

  view.bindResetDataEvent(() => {
    store.resetData();
    store.reset();
    console.log("Reset Data Button Clicked - All Data has been Deleted");
  });

  view.bindPlayerMoveEvent((square) => {
    const existingMove = store.game.moves.find(
      (move) => move.squareID === +square.id,
    );

    if (existingMove) {
      return;
    }

    // Place an Icon of the Current Player in a Square
    // view.handlePlayerMove(square, store.game.currentPlayer);
    // console.log(
    //   `Player with ${store.game.currentPlayer.id} ID Clicked Square ${+square.id} ID`,
    // );

    // Update State (Moves)
    store.playerMove(+square.id);
    console.log("Game Status ~>", store.game.status);
  });
}

window.addEventListener("load", init);
