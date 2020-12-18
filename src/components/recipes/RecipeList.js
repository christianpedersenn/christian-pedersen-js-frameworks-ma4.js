import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
			.then(json => {
				setRecipes(json.results);
                setFilteredRecipes(json.results);
                // console.log(json.results);
			})
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

	const filterCards = function(e) {
		const searchValue = e.target.value.toLowerCase();
		const filteredArray = recipes.filter(function(char) {
            const lowerCaseTitle = char.title.toLowerCase();
            const lowerCaseIngredients = char.ingredients.toLowerCase();
			if (lowerCaseTitle.includes(searchValue) || lowerCaseIngredients.includes(searchValue)) {
				return true;
			}
			return false;
		});
		setFilteredRecipes(filteredArray);
	};    

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
		<Row>
            <Search handleSearch={filterCards} />
            <br></br><br></br><br></br>
            <ul style={{width: '100%'}}>
			{filteredRecipes.map(recipe => {
                const { id, title, ingredients, thumbnail } = recipe;
				return (
                    <Col key={id} id={id} >
                        <RecipeItem title={title} ingredients={ingredients} thumbnail={thumbnail} />   
                        <br></br>                              
                    </Col>
				);
			})}
            </ul>
		</Row>        
    );
}

export default RecipeList;