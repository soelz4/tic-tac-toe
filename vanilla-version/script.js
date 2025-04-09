const App = {
  // Selected HTML Elements
  $: {
    menu: document.querySelector(".menu"),
    menuItems: document.querySelector(".items"),
    resetGameBtn: document.querySelector('[data-id="reset-game-btn"]'),
    resetDataBtn: document.querySelector('[data-id="reset-data-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  // INIT
  init() {
    App.registerEventListener();
  },

  registerEventListener() {
    // DropDown Menu
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // Reset Game
    App.$.resetGameBtn.addEventListener("click", () => {
      console.log("Reset Game Button Clicked.");
    });

    // Reset Data
    App.$.resetDataBtn.addEventListener("click", () => {
      console.log("Reset Data Button Clicked.");
    });

    // Squares
    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        console.log(`Square with ID ${event.target.id} Clicked.`);
      });
    });
  },
};

window.addEventListener("load", () => App.init());
