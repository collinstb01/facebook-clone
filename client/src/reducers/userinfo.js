export default (
  state = { alluserinfo: [], userinfo: [], message: [],message2: [] },
  action
) => {
  switch (action.type) {
    case "CREATE_INFO":
      return { ...state, message: action.payload };
    case "GET_INFO":
      return { ...state, userinfo: action.payload };
    case "GET_ALL_INFO":
      return { ...state, alluserinfo: action.payload };
    case "GET_FOLLOWERS":
      return { ...state, message2: action.payload };
    default:
      return state;
  }
};


