

export default (state = { posts: [], userposts: [],message: [] }, action) => {
    switch (action.type) {
        case "getposts":
            return { ...state, posts: action.payload.data }
        case "createpost":
            return { ...state, message: action.payload };
        case "getUserpost":
            return { ...state, userposts: action.payload }
        default:
            return state;
    }
}