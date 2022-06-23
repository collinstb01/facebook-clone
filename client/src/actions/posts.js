
import * as api from '../api/index.js';

export const getposts = () => async (dispatch) => {
    try {
        const { data } = await api.getposts()
        console.log(data)

        dispatch({ type: "getposts", payload: { data } })
    } catch (error) {
        console.log(error)
    }
}
export const createpost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createpost(post)

        dispatch({ type: "createpost", payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const getUserpost = (id) => async (dispatch) => {

    try {
        const { data } = await api.getUserpost(id)
        console.log(data)

        dispatch({ type: "getUserpost", payload: { data } })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}