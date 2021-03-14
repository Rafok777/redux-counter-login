const increment = (incrementer) => {
  return {
    type: "INCREMENT",
    payload: incrementer,
  };
};

const decrement = (decrementer) => {
  return {
    type: "DECREMENT",
    payload: decrementer,
  };
};

const login = () => {
  return {
    type: "SIGN_IN",
  };
};

export { increment, decrement, login };
