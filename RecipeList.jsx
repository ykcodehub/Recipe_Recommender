import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import Recipes from "../pages/Recipes";
import RecipeListItem from "./common/RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      <Header
        size="huge"
        content={`Recipe list for ${searchedQuery}`}
        textAlign="center"
      />
        <Grid columns={3} doubling>
            {
                recipes && recipes.map(recipes =>(
                    <Grid.Column>
                        <RecipeListItem recipes={recipes} />
                    </Grid.Column>
            ))
            }
        </Grid>
    </Container>
  );
};

export default RecipeList;
