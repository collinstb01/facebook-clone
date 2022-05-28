import * as api from '../api'

export const signup = (formData, navigate) => async (dispatch) => {
    const { data } = await api.signup(formData)

    try {

        dispatch({ type: "AUTH", data })

        navigate("/")
    } catch (error) {
        console.log(error)
    }
}
export const signin = (formData, navigate) => async (dispatch) => {
    const { data } = await api.signin(formData)

    try {

        dispatch({ type: "AUTH", data })

        navigate("/")

    } catch (error) {
        console.log(error)
    }
}