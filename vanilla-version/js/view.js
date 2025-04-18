export default class View {
  $ = {};
  $$ = {};

  constructor() {
    // DropDown Menu
    this.$.menu = this.#qs(".menu");
    this.$.menuBtn = this.#qs('[data-id="menu-btn"]');
    this.$.menuItems = this.#qs(".items");
    this.$.resetGameBtn = this.#qs('[data-id="reset-game-btn"]');
    this.$.resetDataBtn = this.#qs('[data-id="reset-data-btn"]');
    // Squares
    this.$$.squares = this.#qsAll('[data-id="square"]');
    // Modal
    this.$.modal = this.#qs('[data-id="modal"]');
    this.$.modalText = this.#qs('[data-id="modal-text"]');
    this.$.modalBtn = this.#qs('[data-id="modal-btn"]');
    // Turn
    this.$.turn = this.#qs('[data-id="turn"]');

    // UI-Only Event Listener
    this.$.menu.addEventListener("click", () => {
      this.#toggleMenu();
    });
  }

  // Reset Game Button
  bindGameResetEvent(handler) {
    this.$.resetGameBtn.addEventListener("click", handler);
    this.$.modalBtn.addEventListener("click", handler);
  }

  // Reset Data Button
  bindResetDataEvent(handler) {
    this.$.resetDataBtn.addEventListener("click", handler);
  }

  // Player Move - Click on Squares
  bindPlayerMoveEvent(handler) {
    this.$$.squares.forEach((square) => {
      square.addEventListener("click", () => handler(square));
    });
  }

  // Toggle Menu
  #toggleMenu() {
    this.$.menuItems.classList.toggle("hidden");
    this.$.menuBtn.classList.toggle("border");

    // ICON
    const icon = this.$.menuBtn.querySelector("i");

    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  }

  openModal(msg) {
    this.$.modal.classList.remove("hidden");
    this.$.modalText.textContent = msg;
  }

  closeModal() {
    this.$.modal.classList.add("hidden");
  }

  clearMoves() {
    this.$$.squares.forEach((square) => {
      square.replaceChildren();
    });
  }

  // Handle Player Move
  handlePlayerMove(square, player) {
    const icon = document.createElement("i");

    if (player.id === 1) {
      icon.classList.add("fa-solid", player.iconClass);
      icon.style.color = "var(--turquoise)";
    } else if (player.id === 2) {
      icon.classList.add("fa-solid", player.iconClass);
      icon.style.color = "var(--yellow)";
    }

    square.replaceChildren(icon);
  }

  // Player Indicator - Player = 1 or 2
  setTurnIndicator(player) {
    const icon = document.createElement("i");
    const label = document.createElement("p");

    if (player.id === 1) {
      icon.classList.add("fa-solid", player.iconClass);
      icon.style.color = "var(--turquoise)";
      label.style.color = "var(--turquoise)";
      label.textContent = `${player.name}, You're Up!`;
    } else if (player.id === 2) {
      icon.classList.add("fa-solid", player.iconClass);
      icon.style.color = "var(--yellow)";
      label.style.color = "var(--yellow)";
      label.textContent = `${player.name}, You're Up!`;
    }

    this.$.turn.replaceChildren(icon, label);
  }

  // Query Selector Element
  #qs(selector) {
    const el = document.querySelector(selector);

    if (!el) {
      throw new Error("Could not Found Elemets");
    }

    return el;
  }

  // Query Selector Element
  #qsAll(selector) {
    const elList = document.querySelectorAll(selector);

    if (!elList) {
      throw new Error("Could not Found Elemets");
    }

    return elList;
  }
}
