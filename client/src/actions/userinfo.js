import * as api from '../api'

export const createuserinfo = (info) => async (dispatch) => {
    const { data } = await api.createuserinfo(info)

    try {
        dispatch({ type: "CREATE_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getuserinfo = (id) => async (dispatch) => {
    const { data } = await api.getuserinfo(id)

    try {
        dispatch({ type: "GET_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const updateuserinfo = (info) => async (dispatch) => {
    const { data } = await api.updateuserinfo(info)

    try {
        dispatch({ type: "CREATE_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
