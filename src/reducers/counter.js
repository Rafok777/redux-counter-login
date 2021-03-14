const counterReducer = (status = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return status + action.payload;
    case "DECREMENT":
      return status - action.payload;
    default:
      return status;
  }
};

export default counterReducer;
