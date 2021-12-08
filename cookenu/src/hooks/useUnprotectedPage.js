import {goToRecipeList } from "../routes/coordinator"
import {useHistory} from 'react-router-dom'
import {useLayoutEffect} from 'react'

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        if(token){
            goToRecipeList(history)
        }
    }, [history])
}

export default useUnprotectedPage