const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const login = () => {
  return {
    type: "SIGN_IN",
  };
};

export { increment, decrement, login };
