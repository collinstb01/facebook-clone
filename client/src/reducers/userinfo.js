

export default (state = { userinfo: [], message: [] }, action) => {
    switch (action.type) {
        case "CREATE_INFO":
            return { ...state, message: action.payload }
        case "GET_INFO":
            return { ...state, userinfo: action.payload }
        default:
            return state;
    }
}