
import * as api from '../api/index.js';

export const getposts = () => async (dispatch) => {
    try {
        const { data } = await api.getposts()

        dispatch({ type: "getposts", payload: { data } })
    } catch (error) {
        console.log(error)
    }
}
export const createpost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createpost(post)

        dispatch({ type: "createpost", payload: {data} })
        console.log(data)

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

export const likepost = ({id, userId}) => async (dispatch) => {

    try {
        const { data } = await api.likepost({id, userId})
        console.log(data)

        dispatch({ type: "likepost", payload: { data } })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const commentforpost = ({comment, id, name}) => async (dispatch) => {

    try {
        const { data } = await api.comments({comment, id, name})

        dispatch({ type: "createcomment", payload: { data } })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}