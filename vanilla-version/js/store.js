const initialValue = {
  moves: [],
  history: {
    currentRoundGames: [],
    allGames: [],
  },
};
export default class Store {
  #state = initialValue;

  constructor(players) {
    this.players = players;
  }

  get game() {
    const state = this.#getState();

    const currentPlayer = this.players[state.moves.length % 2];

    // Winning Patterns
    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];

    let winner = null;

    for (const player of this.players) {
      const selectedSquareIDs = state.moves
        .filter((move) => move.player.id === player.id)
        .map((move) => move.squareID);

      for (const pattern of winningPatterns) {
        if (pattern.every((v) => selectedSquareIDs.includes(v))) {
          winner = player;
        }
      }
    }

    return {
      moves: state.moves,
      currentPlayer,
      status: {
        isCompleted: winner != null || state.moves.length === 9,
        winner,
      },
    };
  }

  get stats() {
    const state = this.#getState();

    return {
      playerWithStats: this.players.map((player) => {
        const wins = state.history.currentRoundGames.filter(
          (game) => game.status.winner?.id === player.id,
        ).length;

        return {
          ...player,
          wins,
        };
      }),
      ties: state.history.currentRoundGames.filter(
        (game) => game.status.winner === null,
      ).length,
    };
  }

  reset() {
    const state = this.#getState();
    const stateClone = structuredClone(state);

    const { status, moves } = this.game;

    if (status.isCompleted) {
      stateClone.history.currentRoundGames.push({
        moves,
        status,
      });
    }

    stateClone.moves = [];

    this.#saveState(stateClone);
  }

  resetData() {
    const stateClone = structuredClone(this.#getState());
    stateClone.history.allGames.push(...stateClone.history.currentRoundGames);
    stateClone.history.currentRoundGames = [];

    this.#saveState(stateClone);
  }

  playerMove(squareID) {
    const state = this.#getState();
    const stateClone = structuredClone(state);

    stateClone.moves.push({
      squareID,
      player: this.game.currentPlayer,
    });

    this.#saveState(stateClone);
  }

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFunc) {
    const previousState = this.#getState();
    let newState;

    switch (typeof stateOrFunc) {
      case "function":
        newState = stateOrFunc(previousState);
        break;
      case "object":
        newState = stateOrFunc;
        break;
      default:
        throw new Error("Invalid Argument Passed to saveState Function");
    }

    this.#state = newState;
  }
}
