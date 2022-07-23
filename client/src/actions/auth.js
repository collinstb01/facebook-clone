import * as api from '../api'

export const signup = (formData, navigate) => async (dispatch) => {
    const { data } = await api.signup(formData)

    try {
        console.log(data)
        dispatch({ type: "AUTH", data })
        const user = localStorage.getItem("profile")
        if (user) {
            navigate("/home")
        }
    } catch (error) {
        console.log(error)
    }
}
export const signin = (formData, navigate) => async (dispatch) => {
    const { data } = await api.signin(formData)

    try {
        dispatch({ type: "AUTH", data })

        const user = localStorage.getItem("profile")
        if (user) {
            navigate("/home")
        }

    } catch (error) {
        console.log(error)
    }
}