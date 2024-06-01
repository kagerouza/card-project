
export const initialState = {
  reason: "",
  explanation: "",
  removed: false,
  isCardNumberVisible: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_REASON":
      return { ...state, reason: action.payload };
    case "SET_EXPLANATION":
      return { ...state, explanation: action.payload };
    case "SET_REMOVED":
      return { ...state, removed: action.payload };
    case "CARD_NUMBER_VISIBILITY":
      return { ...state, isCardNumberVisible: !state.isCardNumberVisible };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
