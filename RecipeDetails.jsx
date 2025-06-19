import { useEffect } from "react";
import { getRecipe } from "../services/api";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Image, } from "semantic-ui-react";

const RecipeDetails = () => {

    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    useEffect((result) => {
        const getData = async () => {
        let result = await getRecipe(recipeId)
        }
           if (result && result.recipe){

            setRecipe(result.recipe);
            } 
            getData();
        }, [])
        return(
        Object.keys(recipe).length > 0 ?
        <Grid container stackable columns={2} className="detailsPageContent">
            <Grid.Column>
                <Button
                    as={Link}
                    to={`/recipes`}
                    content="Back to recipe list"
                />
                <Image src={recipe.image_url} />
            </Grid.Column>
        </Grid> : null
    )
}
export default RecipeDetails;