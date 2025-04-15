export default class View {
  $ = {};
  constructor() {
    // DropDown Menu
    this.$.menu = document.querySelector(".menu");
    this.$.menuBtn = document.querySelector('[data-id="menu-btn"]');
    this.$.menuItems = document.querySelector(".items");
    this.$.resetGameBtn = document.querySelector('[data-id="reset-game-btn"]');
    this.$.resetDataBtn = document.querySelector('[data-id="reset-data-btn"]');
    // Squares
    this.$.squares = document.querySelectorAll('[data-id="square"]');
    // Modal
    this.$.modal = document.querySelector('[data-id="modal"]');
    this.$.modalText = document.querySelector('[data-id="modal-text"]');
    this.$.modalBtn = document.querySelector('[data-id="modal-btn"]');
    // Turn
    this.$.turn = document.querySelector('[data-id="turn"]');

    // UI-Only Event Listener
    this.$.menu.addEventListener("click", () => {
      this.$.menuItems.classList.toggle("hidden");
    });
  }

  // Reset Game Button
  bindGameResetEvent(handler) {
    this.$.resetGameBtn.addEventListener("click", handler);
  }

  // Reset Data Button
  bindResetDataEvent(handler) {
    this.$.resetDataBtn.addEventListener("click", handler);
  }

  // Player Move - Click on Squares
  bindPlayerMoveEvent(handler) {
    this.$.squares.forEach((square) => {
      square.addEventListener("click", handler);
    });
  }
}
