
import { useState } from "react";
import "./recipe.css"
import { Grid, Form, Input } from "semantic-ui-react";
const Search = ({setSearchedQuery}) => {
    const [value, setvalue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={2} textAlign="center" className="search-box">
            <Grid.Column>
                <h2 className="search-heading">
                    Search recipes with <span style={{ color:"red"}}>Recipe Recommender</span>
                    </h2>
                    <h4>Input Recipes seprated by comma</h4>
                    <div className="serchFormContainer">
                        <form onSubmit={onFormSubmit}>      
                            <Input 
                                placeholder="tomato, patato, pizza, brinjal..."
                                action={{icon: 'search', color:'blue'}}
                                onChange={(e) => setvalue(e.target.value)}
                                value={value}
                                
                                />
                        </form>
                    </div>
            </Grid.Column>
        </Grid>
    )
}
export default Search;