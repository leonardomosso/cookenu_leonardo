import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddRecipePages = () => {
    useProtectedPage()
    return (
        <div>
            <h1>AddRecipePages</h1>
        </div>
    )
}

export default AddRecipePages