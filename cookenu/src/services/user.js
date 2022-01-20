import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { goToRecipeList } from "../routes/coordinator";

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body, history)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToRecipeList(history)
            setRightButtonText("Logout")
            
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)})
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading ) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToRecipeList(history)
        setRightButtonText("Logout")     
    })
    .catch((err) => alert(err.response.data.message))
    setIsLoading(false)

}