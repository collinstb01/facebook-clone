

export default (state = {alluserinfo: [], userinfo: [], message: [] }, action) => {
    switch (action.type) {
        case "CREATE_INFO":
            return { ...state, message: action.payload }
        case "GET_INFO":
            return { ...state, userinfo: action.payload }
        case "GET_ALL_INFO":
                return { ...state, alluserinfo: action.payload }
        default:
            return state;
    }
}