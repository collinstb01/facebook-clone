
import * as api from '../api/index.js';

export const getposts = (page) => async (dispatch) => {
    try {
        const { data } = await api.getposts(page)

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

export const updatepost = ({title, postid}) => async (dispatch) => {
    try {
        const { data } = await api.updatepost({title, postid})
        console.log(title)
        dispatch({ type: "updatepost", payload: {data} })
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

export const likepost = ({id, userId, setMessage, creator,name}) => async (dispatch) => {

    try {
        const { data } = await api.likepost({id, userId, creator,name})

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

export const deletepost = (_id) =>  async (dispatch) => {

    try {
        const {data} = await api.deletepost(_id)

        dispatch({type: "deletepost", payload: {data}})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}