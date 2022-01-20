import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddRecipeForm from '../AddRecipesPage/AddRecipeForm'

const AddRecipePages = () => {
    useProtectedPage()
    return(
    <AddRecipeForm/>
)}

export default AddRecipePages