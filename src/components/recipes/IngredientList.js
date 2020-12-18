import React from "react";
import PropTypes from "prop-types";

function ingredientList({ ingredients }) {
    const ingredient = [ingredients];
    const ingredientArray = ingredient[0].split(', ');
    const ingredientList = ingredientArray.map((ingredientArray) => 
        <li key={Math.random()}>{ingredientArray}</li>
    )
	return (
        <ul>{ingredientList}</ul>
    );
}

ingredientList.propTypes = {
	ingredients: PropTypes.string.isRequired,
};

export default ingredientList;