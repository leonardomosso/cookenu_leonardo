import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData';
import { RecipeListContainer, AddRecipeButton} from "./styled";
import {BASE_URL} from '../../constants/urls';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { Add } from     "@material-ui/icons";
import {useHistory} from 'react-router-dom';
import {goToAddRecipes, goToRecipeDetail} from '../../routes/coordinator'



const RecipeListPage = () => {
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    useProtectedPage()

    const history = useHistory()

    const onClickCard = (id) => {
        goToRecipeDetail(history,  id )
    }

    const recipesCards = recipes.map((recipe) => {
        return (
                <RecipeCard 
                    key={recipe.recipe_id}
                    title={recipe.title}
                    image={recipe.image}
                    onClick={() => onClickCard(recipe.recipe_id)}
                /> 
        )
    })

    return (
        <RecipeListContainer>
            {recipesCards}
            <AddRecipeButton
                color={'primary'}
                onClick = {() => goToAddRecipes(history)}
            >
                <Add />
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipeListPage