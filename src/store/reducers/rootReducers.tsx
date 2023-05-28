const initState = {
  id: null,
};

const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("id", JSON.stringify(action.payload));
      return {
        ...state,
        id: action.payload,
      };
    case "SIGNOUT":
      localStorage.removeItem("id");
      localStorage.removeItem("CheckToken");
      return {
        ...state,
        id: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
