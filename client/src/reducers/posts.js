export default (state = { posts: [], userposts: [], message: [],loading: true }, action) => {
  switch (action.type) {
    case "getposts":
      return { ...state, posts: action.payload.data, loading: false };
    case "createpost":
      return { ...state, message: action.payload };
    case "getUserpost":
      return { ...state, userposts: action.payload,loading: false };
    case "likepost":
      return { ...state, message: action.payload,loading: false };
    case "createcomment":
      return { ...state, message: action.payload,loading: false };
    default:
      return state;
  }
};
