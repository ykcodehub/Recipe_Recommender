
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
import Recipes from '../../pages/Recipes';

const RecipeListItem = ({ recipes }) => {
    return(
        <Card>
            <img src={recipes.image_url} alt='thumbnail' style={{height:180, width:290}}/>
            <Card.Content>
                <Card.Header content={recipes.title} />
                <Card.Description>
                    <h4>{recipes.publisher}</h4>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button
                    as={Link}
                    to={`/recipes/${recipes.recipe_id}`}
                    content="Details"
                    color='orange'
                    size='tiny'

                />
                <Button
                    href={recipes.source_url}
                    target="_blank"
                    content="Recipe URL"
                    color='green'
                    size='tiny'

                />
            </Card.Content>
        </Card>
    )
}
export default RecipeListItem;