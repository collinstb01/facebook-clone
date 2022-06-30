export default (
  state = { alluserinfo: [], userinfo: [], message: [],message2: [],loading: true },
  action
) => {
  switch (action.type) {
    case "CREATE_INFO":
      return { ...state, message: action.payload,loading: false };
    case "GET_INFO":
      return { ...state, userinfo: action.payload, loading: false };
    case "GET_ALL_INFO":
      return { ...state, alluserinfo: action.payload,loading: false };
    case "GET_FOLLOWERS":
      return { ...state, message2: action.payload,loading: false };
    default:
      return state;
  }
};


