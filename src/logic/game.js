//#region Actions
const PUT_TOKEN = "PUT_TOKEN";
//#endregion

export const initialState = {
  squares: Array(9).fill(null),
  next: "🍄",
  winner: null,
};

//#region Reducer
export function reducer(state = {}, action = {}) {
  switch (action.type) {
    case PUT_TOKEN:
      return handlePutToken(state, action);
    default:
      throw new Error();
  }
}
//#endregion

//#region Action Creators
export function putToken(index) {
  return { type: PUT_TOKEN, index };
}
//#endregion

//#region Action Logic
function handlePutToken(state, { index }) {
  const { squares, next, winner } = state;

  if (winner !== null || squares[index] !== null) {
    return state;
  }

  const squaresCopy = squares.slice();
  squaresCopy[index] = next;

  return {
    squares: squaresCopy,
    next: next === "🍄" ? "🍌" : "🍄",
    winner: calcWinner(squaresCopy),
  };
}
//#endregion

function calcWinner(squares) {
  const lines = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    const x = squares[a];
    const y = squares[b];
    const z = squares[c];

    if (x !== null && x === y && y === z) {
      return x;
    }
  }

  return null;
}
